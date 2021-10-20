const { Pool } = require('pg');
const { POSTGRES_USER, POSTGRES_PASSWORD } = require('../config.js');

const pool = new Pool({
  user: POSTGRES_USER,
  host: 'ec2-18-118-109-254.us-east-2.compute.amazonaws.com',
  database: 'joblisting',
  password: POSTGRES_PASSWORD,
  port: 5432,
});

pool.connect();

const searchlisting = `with leveling as  (
                        select
                        job_id,
                        case
                          when title like '%enior%' or title like '%Sr%' or title like '%Lead%' or title like '%Director%' or title like '%Head%' or title like '%Chief%' then 'senior'
                          when title like '%Manager%' or job_type = 'full_time' then 'mid'
                          when job_type <> 'full_time' then 'junior'
                          else 'junior'
                        end as exp_level
                        from joblisting
                        ), final_query as (
                        select
                          jl.*,
                          l.exp_level,
                          case
                            when l.exp_level = 'senior' then 4 --Greater than 100k
                            when l.exp_level = 'mid' then 3 -- Greater than 75k-100k
                            when l.exp_level = 'junior' and jl.job_type = 'part_time' then 2 -- 50k -75k
                            when l.exp_level = 'junior' and jl.job_type <> 'part_time' then 1 -- 50k -75k
                            else 2
                          end as pay_band
                        from joblisting jl
                        join leveling l
                        on jl.job_id = l.job_id
                        )
                        select *
                        from final_query`
const joblisting = `select * from joblisting OFFSET 0 ROWS
FETCH FIRST 5 ROW ONLY;`

module.exports = {
  getJoblistings: (query, callback) => {
    const { search, pay_band, job_type, exp_level } = query;
    let combinedQuery = '';

    const searchQuery = !!search
      ? combinedQuery.length === 0
        ? `to_tsvector(title) @@ to_tsquery('${search}') `
        : `and to_tsvector(title) @@ to_tsquery('${search}') `
      : '';

    combinedQuery = combinedQuery.concat(searchQuery);

    const payQuery = !!pay_band
      ? combinedQuery.length === 0
        ? `pay_band = ${Number(pay_band)} `
        : `and pay_band = ${Number(pay_band)} `
      : '';

    combinedQuery = combinedQuery.concat(payQuery);

    const jobtypeQuery = !!job_type
      ? combinedQuery.length === 0
        ? `job_type = '${job_type}' `
        : `and job_type = '${job_type}' `
      : '';

    combinedQuery = combinedQuery.concat(jobtypeQuery);

    const explevelQuery = !!exp_level
      ? combinedQuery.length === 0
        ? `exp_level = '${exp_level}' `
        : `and exp_level = '${exp_level}' `
      : '';

    combinedQuery = combinedQuery.concat(explevelQuery);

    const sqlQuery =
      combinedQuery.length === 0 ?  joblisting : `${searchlisting} where ${combinedQuery} OFFSET 0 ROWS
      FETCH FIRST 5 ROW ONLY;`;

    pool.query(sqlQuery, (err, data) => {
      if (err) {
        callback(err)
      } else {
        callback(null, data.rows)
      }
    })
  }
}