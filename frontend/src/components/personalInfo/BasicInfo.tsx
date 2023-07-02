import { InfoCard } from "@/components/common";
import { BASIC_INFO } from "@/constants/personalInfo";
import { LinkTable } from "@/type/common";

const BasicInfo = () => {
  const info = BASIC_INFO;

  const values: Record<LinkTable["key"], LinkTable["value"]> = {
    userImage: undefined,
    username: "技大太郎",
    birthday: undefined,
    gender: undefined,
    password: "******",
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

export default BasicInfo;
