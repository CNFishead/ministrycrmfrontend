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
import { Skeleton } from "antd";

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
          <div className={styles.header}>
            <p className={styles.headerText}>
              Viewing members for <span className={styles.ministryName}>{ministry ? ministry?.name : mainMinistry?.name}</span>
            </p>
          </div>
          {loading ? (
            <Skeleton active />
          ) : (
            <div className={styles.memberContainer}>
              {members?.map((member: MemberType) => (
                <UserItem key={member?._id} user={member} />
              ))}
            </div>
          )}
        </div>
      </SearchWrapper>
    </div>
  );
};

export default Members;
