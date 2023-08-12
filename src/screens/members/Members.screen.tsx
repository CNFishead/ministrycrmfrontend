import SearchWrapper from "@/layout/searchWrapper/SearchWrapper.layout";
import styles from "./Members.module.scss";
import React from "react";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CreateNewMember from "./modal/CreateNewMember.modal";
import getMembers from "@/redux/actions/member/getMembers";
import MemberType from "@/types/MemberType";
import UserItem from "@/components/userItem/UserItem.component";
import { Avatar, Skeleton, Table } from "antd";

const Members = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const dispatch = useDispatch();
  const {
    selectedMinistry: { ministry },
    mainMinistry: { ministry: mainMinistry },
  } = useSelector((state: RootState) => state.ministry);

  const {
    search: { search, pageNumber, pageLimit, filter },
  } = useSelector((state: RootState) => state.interface);
  const { user } = useSelector((state: RootState) => state.auth);
  const {
    membersList: { members, loading, error },
    createMember: { loading: createLoading, success: createSuccess, error: createError },
  } = useSelector((state: RootState) => state.member);
  const handleSearch = (value: string) => {
    dispatch(
      getMembers({
        keyword: value,
        page: pageNumber,
        limit: pageLimit,
        filter: filter,
        ministryId: ministry ? ministry?._id : mainMinistry?._id,
      }) as any
    );
  };

  React.useEffect(() => {
    if (!user || loading) return;
    dispatch(
      getMembers({
        keyword: search,
        page: pageNumber,
        limit: pageLimit,
        filter: filter,
        ministryId: ministry ? ministry?._id : mainMinistry?._id,
      }) as any
    );
    return () => {};
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <SearchWrapper
        buttons={[
          {
            toolTip: "Add Member",
            icon: (
              <div className={styles.iconContainer}>
                <AiOutlinePlus /> <AiOutlineUser className={styles.icon} />
              </div>
            ),
            // set onClick to return nothing
            onClick: () => {},
            href: "/members/new",
            type: "primary",
          },
        ]}
        placeholder="Search Members"
        action={() =>
          getMembers({
            keyword: search,
            page: pageNumber,
            limit: pageLimit,
            filter: filter,
            ministryId: ministry ? ministry?._id : mainMinistry?._id,
          })
        }
      >
        <div className={styles.contentContainer}>
          <Table
            className={styles.table}
            dataSource={members}
            loading={loading}
            rowKey={(record: MemberType) => record._id}
            columns={[
              {
                title: "",
                dataIndex: "profileImageUrl",
                key: "profileImageUrl",
                render: (text: string, record: MemberType) => {
                  return <Avatar src={text} size={64} />;
                },
              },
              {
                title: "Name",
                dataIndex: "fullName",
                key: "fullName",
              },
              {
                title: "Family",
                // we want the family name, family is an object containing the family id and name
                dataIndex: ["family", "name"],
                key: "family",
              },
              {
                title: "Email",
                dataIndex: "email",
                key: "email",
              },
              {
                title: "Phone",
                dataIndex: "phone",
                key: "phone",
              },
              {
                title: "Address",
                dataIndex: "address",
                key: "address",
              },
              {
                title: "Sex",
                dataIndex: "sex",
                key: "sex",
              },
              {
                title: "role",
                dataIndex: "role",
                key: "role",
              },
              {
                title: "is Child",
                dataIndex: "isChild",
                key: "isChild",
                render: (text: boolean) => {
                  return text ? "Yes" : "No";
                },
              },
            ]}
            pagination={false}
          />
        </div>
      </SearchWrapper>
    </div>
  );
};

export default Members;
