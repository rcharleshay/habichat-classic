import React from 'react'
import SEO from 'atoms/SEO'
import Text from 'atoms/Text'
import Header from 'components/Header'
import Footer from 'components/Footer'
import PageLayout from 'layouts/PageLayout'
import ContentLayout from 'layouts/ContentLayout'

const Terms = () => (
  <PageLayout>
    <SEO page="terms" crawl={true} />
    <Header />
    <ContentLayout.Padding style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Text size="XL" text="terms-1" bold style={{ paddingBottom: 20 }} />
      <Text size="M" text="terms-2" bold style={{ paddingBottom: 20 }} />
      <Text size="S" text="terms-3" style={{ paddingBottom: 20 }} />
      <Text size="M" text="terms-4" bold />
      <ol type="a">
        <li>
          <Text size="S" text="terms-5" style={{ paddingBottom: 20 }} />
          <ol type="i">
            <li>
              <Text size="S" text="terms-6" style={{ paddingBottom: 20 }} />
            </li>
            <li>
              <Text size="S" text="terms-7" style={{ paddingBottom: 20 }} />
            </li>
            <li>
              <Text size="S" text="terms-8" style={{ paddingBottom: 20 }} />
            </li>
            <li>
              <Text size="S" text="terms-9" style={{ paddingBottom: 20 }} />
            </li>
            <li>
              <Text size="S" text="terms-10" />
            </li>
          </ol>
        </li>
        <li>
          <Text size="S" text="terms-11" />
        </li>
      </ol>
      <Text size="M" text="terms-12" bold />
      <ol type="a">
        <li>
          <Text size="S" text="terms-13" style={{ paddingBottom: 20 }} />
        </li>
        <li>
          <Text size="S" text="terms-14" />
        </li>
      </ol>
      <Text size="M" text="terms-15" bold />
      <ol type="a">
        <li>
          <Text size="S" text="terms-16" />
        </li>
      </ol>
      <Text size="M" text="terms-17" bold />
      <ol type="a">
        <li>
          <Text size="S" text="terms-18" />
        </li>
      </ol>
      <Text size="M" text="terms-19" bold />
      <ol type="a">
        <li>
          <Text size="S" text="terms-20" />
        </li>
      </ol>
      <Text size="M" text="terms-21" bold />
      <ol type="a">
        <li>
          <Text size="S" text="terms-22" />
        </li>
      </ol>
      <Text size="M" text="terms-23" bold />
      <ol type="a">
        <li>
          <Text size="S" text="terms-24" />
        </li>
      </ol>
    </ContentLayout.Padding>
    <Footer />
  </PageLayout>
)

export default Terms
