const getEvents =
`
with getArray as (
  select
    id,
    user_id,
    json_build_object
          (
          'id', id,
          'title', title,
          'start_time', start_time,
          'end_time', end_time,
          'body', body
          )
         as data
  from events
  where user_id = $1 and date = $2
  group by id, user_id
  order by start_time asc
  )
  select
    json_build_object(e.date, json_agg(ga.data)) as events
  from events e
  join getArray ga
  on e.id = ga.id
  and e.user_id = ga.user_id
  group by  e.date
`;

const deleteEvent =
`
DELETE FROM events WHERE id = $1 and user_id = $2;
`;

const insertEvent =
`
INSERT INTO events (user_id, title, start_time, end_time, body, date) values ($1, $2, $3, $4, $5, $6);
`;

const editEvent =
`
update events
set title = $1, start_time = $2, end_time = $3, body = $4
where id = $5 and user_id = $6;
`;

module.exports = {
  getEvents,
  deleteEvent,
  insertEvent,
  editEvent,
}