import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  //{
  //  title: 'Easy to Use',
  //  imageUrl: 'static/img/SageInfoBubbles.png',
  //    description: (
  //      <>
  //        Docusaurus was designed from the ground up to be easily installed and
  //        used to get your website up and running quickly.
  //      </>
  //    ),
  // },
  //  {
  //    title: 'Focus on What Matters',
  //    imageUrl: 'img/undraw_docusaurus_tree.svg',
  //    description: (
  //      <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //        ahead and move your docs into the <code>docs</code> directory.
  //      </>
  //    ),
  //  },
  //  {
  //    title: 'Powered by React',
  //    imageUrl: 'img/undraw_docusaurus_react.svg',
  //    description: (
  //      <>
  //        Extend or customize your website layout by reusing React. Docusaurus can
  //        be extended while reusing the same header and footer.
  //      </>
  //    ),
  //  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/foresight-cloud-app-mod-overview")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="admonition admonition-caution alert alert--warning text--center">
          <div class="admonition-heading">
            <h3>
              <span className="admonition-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  \
                  <path
                    fill-rule="evenodd"
                    d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
                  ></path>
                </svg>
              </span>
              Site Under Construction
            </h3>
          </div>
          <p className="admonition-content">
            Documentation is still under development!
          </p>
        </div>

        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
