import { GetServerSideProps, NextPage } from "next";
import React from "react";

// Assuming the BrowsingHistoryContent component is placed under the pages/browsingHistory directory
import { BrowsingHistoryContent } from "@/components/pages/browsingHistory/BrowsingHistoryContent";
import { getABTestUser } from "@/getServerSideProps/app/getABTestUser";
import { getUserMeHandler } from "@/stores/queryData/userMe";
import { GlobalPageBaseProps } from "@/types/pages";

// Replace these with appropriate constants or values for your Browsing History page
import { BROWSING_HISTORY_URL } from "@/constants/pageUrl";
import { GREEN_DEFAULT_TITLE_TAG_TEXT } from "@/constants/text/contentsText";

type Props = {
  isTargetV2Header: boolean;
} & GlobalPageBaseProps;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookie = req.headers.cookie || "";
  const userData = await getUserMeHandler(cookie);
  const { abTestGroup } = await getABTestUser(cookie, "browsing_history_test_202312");

  return {
    props: {
      metaInfo: {
        baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        title: `Browsing History | ${GREEN_DEFAULT_TITLE_TAG_TEXT}`,
        description: "Explore your browsing history.",
        keywords: "browsing, history, user, activities",
        noindex: false,
      },
      ogInfo: {
        title: `Browsing History | ${GREEN_DEFAULT_TITLE_TAG_TEXT}`,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${BROWSING_HISTORY_URL}`,
        image: "", // Provide an appropriate image URL if available
        description: "Explore your browsing history.",
      },
      breadcrumbs: [{ name: "Browsing History" }],
      userAgent: req.headers["user-agent"],
      userData: JSON.parse(JSON.stringify(userData)),
      isTargetV2Header: abTestGroup === 2,
      searchPageGroup: abTestGroup,
    },
  };
};

const BrowsingHistoryPage: NextPage<Props> = (props) => {
  return <BrowsingHistoryContent {...props} />;
};

export default BrowsingHistoryPage;
