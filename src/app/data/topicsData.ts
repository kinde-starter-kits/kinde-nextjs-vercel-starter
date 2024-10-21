import sparkle from "@/app/assets/topic-icons/sparkle.svg";
import build from "@/app/assets/topic-icons/build.svg";
import devTools from "@/app/assets/topic-icons/dev-tools.svg";
import authentication from "@/app/assets/topic-icons/authentication.svg";
import billing from "@/app/assets/topic-icons/billing.svg";
import brand from "@/app/assets/topic-icons/brand.svg";
import properties from "@/app/assets/topic-icons/properties.svg";
import profile from "@/app/assets/topic-icons/profile.svg";
import releases from "@/app/assets/topic-icons/releases.svg";
import webhooks from "@/app/assets/topic-icons/webhooks.svg";
import settings from "@/app/assets/topic-icons/settings.svg";
import trust from "@/app/assets/topic-icons/trust.svg";

interface TopicsData {
  label: string;
  description: string;
  icon: string;
  docsLink: string;
}

const topicsData: TopicsData[] = [
  {
    label: "Get started",
    description: "Essential information for using and connecting to Kinde",
    icon: sparkle,
    docsLink: "https://docs.kinde.com/get-started/guides/first-things-first/",
  },
  {
    label: "Build on Kinde",
    description: "Set up all the important features under the hood",
    icon: build,
    docsLink: "https://docs.kinde.com/build/set-up-options/kinde-business-model/",
  },
  {
    label: "SDKs and APIs",
    description: "Jump right in with our API-first developer tools",
    icon: devTools,
    docsLink: "https://docs.kinde.com/developer-tools/about/our-sdks/",
  },
  {
    label: "Auth and access",
    description: "Configure user sign up, sign in, and security verification",
    icon: authentication,
    docsLink: "https://docs.kinde.com/authenticate/about-auth/about-authentication/",
  },
  {
    label: "Plans and payments",
    description: "Build plans and pricing so that your users can pay you",
    icon: billing,
    docsLink: "https://docs.kinde.com/billing/about-payments-and-plans/",
  },
  {
    label: "Design",
    description: "Integrate your own brand elements for pages and screens",
    icon: brand,
    docsLink: "https://docs.kinde.com/design/brand/apply-branding-for-an-organization/",
  },
  {
    label: "Properties",
    description: "Store and use custom data about users and organizations",
    icon: properties,
    docsLink: "https://docs.kinde.com/properties/about-properties/",
  },
  {
    label: "Manage users",
    description: "Manage user profiles, including roles and permissions",
    icon: profile,
    docsLink: "https://docs.kinde.com/manage-users/about/",
  },
  {
    label: "Features and releases",
    description: "Take control of feature development and releases  ",
    icon: releases,
    docsLink: "https://docs.kinde.com/releases/about/about-feature-flags/",
  },
  {
    label: "Integrations",
    description: "Create and manage external system connections to Kinde",
    icon: webhooks,
    docsLink: "https://docs.kinde.com/integrate/connected-apps/add-connected-apps/",
  },
  {
    label: "Manage your account",
    description: "Update account details, data, team, and business information",
    icon: settings,
    docsLink: "https://docs.kinde.com/manage-your-account/profile-and-plan/view-kinde-plan/",
  },
  {
    label: "Trust center",
    description: "Find out how we safeguard your security and data",
    icon: trust,
    docsLink: "https://docs.kinde.com/trust-center/privacy-and-compliance/compliance/",
  },
];

export default topicsData;
