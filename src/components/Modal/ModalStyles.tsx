import { css } from "@emotion/css";

export const styles = {
  modalContainer: css({
    display: "flex",
    width: 600,
    flexDirection: "column",
    "@media (max-width:500px)": {
      width: 340,
    },
  }),
  headerModal: css({
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 16px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
  }),
  modalContent: css({
    padding: "12px 16px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
  }),
  footerModal: css({
    display: "flex",
    justifyContent: "flex-start",
    padding: "12px 0px 0px 0px",
    gap: 16,
    boxSizing: "border-box",
  }),
};
