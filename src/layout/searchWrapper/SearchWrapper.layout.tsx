import styles from "./SearchWrapper.module.scss";
import { useState, useEffect } from "react";
import { Dropdown, Space, Pagination, Input, Button, Switch, Tooltip, Popover } from "antd";
import { AiFillFilter } from "react-icons/ai";
import type { MenuProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MODIFY_FILTER, REMOVE_FILTER, SET_PAGE_LIMIT, SET_PAGE_NUMBER, SET_SEARCH } from "@/redux/constants/interfaceConstants";

const { Search } = Input;

type Props = {
  buttons: {
    icon: React.ReactNode;
    onClick: () => void;
    type: "text" | "primary" | "ghost" | "dashed" | "link" | "default";
    toolTip?: string;
  }[];
  filters?: {
    label: string;
    key: string;
  }[];
  placeholder: string;
  // action is a function that will be dispatched when the search text changes
  action?: (search: string, pageNumber: number, pageLimit: number, filter: string[]) => void;
  children?: React.ReactNode;
  total?: number;
};

const SearchWrapper = (props: Props) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const {
    search: { pageNumber, search, pageLimit, filter },
  } = useSelector((state: any) => state.interface);

  useEffect(() => {
    // dispatch the action to reset data
    if (!props.action) return;
    dispatch(props.action(search, pageNumber, pageLimit, filter) as any);
  }, [search, pageNumber, pageLimit, filter]);

  useEffect(() => {
    return () => {
      dispatch({ type: SET_SEARCH, payload: "" });
      dispatch({ type: SET_PAGE_NUMBER, payload: 1 });
      dispatch({ type: SET_PAGE_LIMIT, payload: 1 });
      dispatch({ type: REMOVE_FILTER });
    };
  }, []);

  const items: MenuProps["items"] = props.filters
    ? [
        ...props.filters.map((filter) => {
          return {
            key: filter.key,
            label: filter.label,
            onClick: () => {
              dispatch({ type: MODIFY_FILTER, payload: filter.key });
            },
          };
        }),
      ]
    : [];

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <Search
          placeholder={props.placeholder}
          allowClear
          onSearch={(value) => {
            dispatch({ type: SET_SEARCH, payload: value });
          }}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          rootClassName={styles.search}
          size="large"
          enterButton
          bordered={false}
          value={searchText}
        />
        <div className={styles.buttonContainer}>
          {props.filters && (
            <Dropdown className={styles.button} menu={{ items, selectable: true, multiple: true }}>
              <Button type="text">
                <Space>
                  <AiFillFilter className={styles.icon} />
                  <p> {filter?.length}</p>
                </Space>
              </Button>
            </Dropdown>
          )}
          {props.buttons.map((button, indx) => (
            <Tooltip key={button.type} title={button.toolTip} placement="bottomRight">
              <Button type={button.type} shape="round" className={styles.button} onClick={button.onClick}>
                {button.icon}
              </Button>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className={styles.childrenContainer}>
        <p className={styles.searchStats}>
          {
            // if the search text is not empty, show the search text, and the number of results
            search && (
              <span>
              results for: {search} - {props?.total || 0} results
              </span>
            )
          }
        </p>
        {props.children}
      </div>
      <div className={styles.pagination}>
        <Pagination
          defaultCurrent={1}
          total={props.total}
          onChange={(page, pageSize) => {
            dispatch({ type: SET_PAGE_NUMBER, payload: page });
          }}
          current={pageNumber}
          pageSize={pageLimit}
          showSizeChanger={true}
          onShowSizeChange={(current, size) => {
            dispatch({ type: SET_PAGE_LIMIT, payload: size });
          }}
        />
      </div>
    </div>
  );
};

export default SearchWrapper;
