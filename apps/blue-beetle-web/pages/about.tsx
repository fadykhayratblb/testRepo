import { useRouter } from 'next/router';
import { getDictionary } from '../../../core/locales/getDictionary';
import Layout from '../app/layout';
import { ar, en } from '../../../libs/shared/constants/consts';

const About = () => {
  const router = useRouter();
  const lang = router.locale || ar;
  const language = getDictionary(lang, 'about');

  const switchLanguage = () => {
    const newLang = lang === en ? ar : en;
    let newPath = router.asPath;

    if (newPath.startsWith(`/${en}`) || newPath.startsWith(`/${ar}`)) {
      newPath = newPath.replace(/^\/(en|ar)/, `/${newLang}`);
    } else {
      newPath = `/${newLang}${newPath}`;
    }

    router.push(newPath, newPath, { locale: newLang });
  };

  return (
    <Layout>
      <h1>{language?.about}</h1>
      <button onClick={switchLanguage}>Switch Language</button>
    </Layout>
  );
};

export default About;
