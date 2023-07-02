import { InfoCard } from "@/components/common";
import { NUTFES_COMMITTEE_INFO } from "@/constants/personalInfo";
import { LinkTable } from "@/type/common";

const NutfesCommitteeInfo = () => {
  const info = NUTFES_COMMITTEE_INFO;

  const values: Record<LinkTable["key"], LinkTable["value"]> = {
    role: undefined,
    bureau: "情報局",
    division: undefined,
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

export default NutfesCommitteeInfo;
