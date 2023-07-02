import { InfoCard } from "@/components/common";
import { UNIVERSITY_INFO } from "@/constants/personalInfo";
import { LinkTable } from "@/type/common";

const UniversityInfo = () => {
  const info = UNIVERSITY_INFO;

  const values: Record<LinkTable["key"], LinkTable["value"]> = {
    studentId: undefined,
    grade: undefined,
    department: undefined,
  };

  return (
    <InfoCard
      title={info.title}
      description={info.description || undefined}
      table={info.table.map((row) => ({
        ...row,
        value: values[row.key],
      }))}
    />
  );
};

export default UniversityInfo;
