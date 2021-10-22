/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export const BlogStyles = styled.div`
  margin: auto;
  width: 50%;
`;
const ViewBlog = ({ blogToView, backToBlogs }) => {
  const backButtonClick = () => {
    backToBlogs();
  };

  return (
    <BlogStyles>
      <div>
        <button className="back" type="button" onClick={backButtonClick}>
          BACK
        </button>
        <div className="blog">
          <h1 className="title">{blogToView.title}</h1>
          <img src={blogToView.urlToImage} alt="Could not load" height="300px" width="500px" />
          <h4 className="author">{blogToView.author}</h4>
          <p className="body">{blogToView.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            {' '}
            <b>Immo alio genere;</b>
            {' '}
            Varietates autem iniurasque fortunae facile veteres philosophorum praeceptis instituta vita superabat. An nisi populari fama? Piso, familiaris noster, et alia multa et hoc loco Stoicos irridebat: Quid enim?
            {' '}
          </p>

          <p>
            Sic enim censent, oportunitatis esse beate vivere. An potest, inquit ille, quicquam esse suavius quam nihil dolere? Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius.
            {' '}
            <mark>Sed potestne rerum maior esse dissensio?</mark>
            {' '}
            Quare ad ea primum, si videtur;
            {' '}
            <a href='http://loripsum.net/' target='_blank'>Quis non odit sordidos, vanos, leves, futtiles?</a>
            {' '}
            Et non ex maxima parte de tota iudicabis? At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit; Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Propter nos enim illam, non propter eam nosmet ipsos diligimus.
            {' '}
          </p>

          <p>Dolere malum est: in crucem qui agitur, beatus esse non potest. Duo Reges: constructio interrete. Inde igitur, inquit, ordiendum est. Sed quid ages tandem, si utilitas ab amicitia, ut fit saepe, defecerit? Qui autem de summo bono dissentit de tota philosophiae ratione dissentit. Qui enim existimabit posse se miserum esse beatus non erit. </p>

          <p>
            Habent enim et bene longam et satis litigiosam disputationem. Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Et nemo nimium beatus est;
            {' '}
            <mark>Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster?</mark>
            {' '}
            Aut unde est hoc contritum vetustate proverbium: quicum in tenebris?
            {' '}
          </p>

          <ol>
            <li>Nam si amitti vita beata potest, beata esse non potest.</li>
            <li>His similes sunt omnes, qui virtuti student levantur vitiis, levantur erroribus, nisi forte censes Ti.</li>
            <li>Ut in geometria, prima si dederis, danda sunt omnia.</li>
            <li>Nihil enim iam habes, quod ad corpus referas;</li>
          </ol>


          <p>Aperiendum est igitur, quid sit voluptas; Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Scaevola tribunus plebis ferret ad plebem vellentne de ea re quaeri. Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Cur, nisi quod turpis oratio est? Dolere malum est: in crucem qui agitur, beatus esse non potest. </p>

          <ul>
            <li>Primum in nostrane potestate est, quid meminerimus?</li>
            <li>Quae quidem sapientes sequuntur duce natura tamquam videntes;</li>
            <li>Quid, cum volumus nomina eorum, qui quid gesserint, nota nobis esse, parentes, patriam, multa praeterea minime necessaria?</li>
            <li>An me, inquam, nisi te audire vellem, censes haec dicturum fuisse?</li>
            <li>Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui.</li>
            <li>Potius inflammat, ut coercendi magis quam dedocendi esse videantur.</li>
          </ul>


          <blockquote cite='http://loripsum.net'>
            Qui mos cum a posterioribus non esset retentus, Arcesilas eum revocavit instituitque ut ii, qui se audire vellent, non de se quaererent, sed ipsi dicerent, quid sentirent;
          </blockquote>

        </div>
      </div>
    </BlogStyles>
  );
};

export default ViewBlog;
