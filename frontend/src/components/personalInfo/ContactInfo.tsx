import { InfoCard } from "@/components/common";
import { CONTACT_INFO } from "@/constants/personalInfo";
import { LinkTable } from "@/type/common";

const ContactInfo = () => {
  const info = CONTACT_INFO;

  const values: Record<LinkTable["key"], LinkTable["value"]> = {
    email: "nutfes-taro@email.com",
    phone: undefined,
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

export default ContactInfo;
