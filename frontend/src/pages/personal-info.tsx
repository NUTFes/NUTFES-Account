import { HomeLayout } from "@/components/layout";
import {
  BasicInfo,
  ContactInfo,
  NutfesCommitteeInfo,
  UniversityInfo,
} from "@/components/personalInfo";

const PersonalInfo = () => (
  <HomeLayout>
    <BasicInfo />
    <ContactInfo />
    <NutfesCommitteeInfo />
    <UniversityInfo />
  </HomeLayout>
);
export default PersonalInfo;
