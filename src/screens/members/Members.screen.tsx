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
import { Avatar, Button, Skeleton, Table } from "antd";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";

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
            size="small"
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
                dataIndex: "phoneNumber",
                key: "phone",
                render: (text: string) => {
                  // format the phone number
                  if (!text) return null;
                  // if the string has an 11th character, it is a country code
                  if (text.length === 11) {
                    return text.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "+$1 ($2) $3-$4");
                  }
                  // otherwise, it is a US number
                  return text.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
                },
              },
              {
                title: "Address",
                dataIndex: "location",
                key: "address",
                render: (text: { address: string; address2: string; city: string; state: string; country: string; zipCode: string }) => {
                  // location is an object containing the address city and state of the member
                  // return as a string with the city and state
                  // return all information that is not null or undefined
                  return `${text?.address ? text?.address : ""} ${text.address2 ? text.address2 : ""} ${text.city ? `${text.city},` : ""} ${
                    text.state ? text.state : ""
                  } ${text.zipCode ? text.zipCode : ""}`.trim();
                },
              },
              {
                title: "Sex",
                dataIndex: "sex",
                key: "sex",
              },
              {
                title: "Role",
                dataIndex: "role",
                key: "role",
              },
              {
                title: "Birthday",
                dataIndex: "birthday",
                key: "birthday",
                render: (text: string) => {
                  return new Date(text).toLocaleDateString();
                },
              },
              {
                title: "Child",
                dataIndex: "isChild",
                key: "isChild",
                render: (text: boolean) => {
                  return text ? "Yes" : "No";
                },
              },
              {
                title: "Actions",
                dataIndex: "actions",
                key: "actions",
                render: (text: string, record: MemberType) => {
                  return (
                    <div className={styles.actions}>
                      <Link href={`/members/edit/${record._id}`}>
                        <Button>
                          <FaEdit />
                        </Button>
                      </Link>
                      <Button>
                        <FaTrash />
                      </Button>
                    </div>
                  );
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
