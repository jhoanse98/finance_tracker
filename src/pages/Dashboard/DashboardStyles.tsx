import { css } from "@emotion/css";

export const styles = {
  leftSideContainer: css({
    flex: "1 0 0 ",
    background: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 24,
    gap: 32,
    boxSizing: "border-box",
  }),
  leftSideInfo: css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 450,
    alignItems: "center",
    gap: 24,
  }),
  leftSideBudget: css({
    display: "flex",
    width: "100%",
    gap: 16,
    justifyContent: "space-between",
  }),
  leftSideTotalInfo: css({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  }),
};
