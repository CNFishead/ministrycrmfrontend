import FamilyType from "@/types/FamilyType";
import styles from "./FamilyItem.module.scss";
import React from "react";
import MemberType from "@/types/MemberType";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";

interface FamilyItemProps {
  family: FamilyType;
}

/**
 * @description - FamilyItem component, renders a family item
 * @param props  - FamilyItemProps
 * @returns
 */
const FamilyItem = (props: FamilyItemProps) => {
  return (
    <Card
      className={styles.container}
      bordered={true}
      hoverable
      style={{ width: '90%' }}
      cover={props.family?.members.slice(0, 3).map((member: MemberType, index) => {
        return <Avatar key={member._id} className={styles.avatar} src={member.profileImageUrl} alt={member.fullName} />;
      })}
    >
      <Meta title={props.family?.name} description={`${props.family?.members.length} members`} />
    </Card>
  );
};

export default FamilyItem;
