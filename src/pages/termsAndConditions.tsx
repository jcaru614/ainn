import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Head from 'next/head';

const SEO = {
  title: `Neural Gazette | Terms and Conditions`,
  description: `An Unbiased AI news platform that' decoding truth and empowering minds. Stay informed with Neural Gazette's accurate AI written news.`,
  image:
    'https://neuralgazette.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.56ecb661.png&w=640&q=75',
  url: 'https://neuralgazette.com/about',
};

const TermsAndConditions = () => {
  return (
    <Layout>
      <Head>
        <title>{SEO.title}</title>
        <link rel="canonical" href={SEO.url} />
        <meta name="description" content={SEO.description} />

        <meta property="og:type" content="home page" />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={SEO.image} />
        <meta property="og:url" content={SEO.url} />

        <meta name="twitter:card" content={SEO.image} />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-24">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-neural-teal mb-4">
            Terms and Conditions
          </h2>
          <p className="text-lg text-gray-700">Last Updated: 09/08/2023</p>

          <h2 className="text-2xl font-semibold mt-6">
            1. Acceptance of Terms
          </h2>
          <p className="text-lg text-gray-700">
            By accessing or using Neural Gazette ("we," "our," or "us"), you
            agree to comply with and be bound by these Terms and Conditions. If
            you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Use of Content</h2>
          <p className="text-lg text-gray-700">
            All content on this website, including articles, images, and videos,
            is provided for informational purposes only. You may not reproduce,
            distribute, or republish any content from this website without our
            written consent.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. User Conduct</h2>
          <p className="text-lg text-gray-700">
            You agree not to use this website for any unlawful or prohibited
            purposes. You are responsible for your conduct when using our
            website.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Privacy Policy</h2>
          <p className="text-lg text-gray-700">
            Your use of this website is also governed by our
            <Link href="/privacyPolicy" className="text-neural-teal">
              {' '}
              Privacy Policy
            </Link>
            , which outlines how we collect, use, and protect your personal
            information.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Changes to Terms</h2>
          <p className="text-lg text-gray-700">
            We reserve the right to update or modify these Terms and Conditions
            at any time without prior notice. Your continued use of the website
            after such changes constitutes your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            6. Contact Information
          </h2>
          <p className="text-lg text-gray-700">
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at neuralgazette@gmail.com.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default TermsAndConditions;
