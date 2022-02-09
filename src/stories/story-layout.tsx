import { PropsWithChildren } from "react";
import "../styles/story-layout.scss";
import classNames from "classnames";

interface StoryLayoutProps {
  width?: "narrow" | "medium" | "full";
}

export function StoryLayout(
  props: PropsWithChildren<StoryLayoutProps>
): JSX.Element {
  const { width = "medium" } = props;

  const classes = classNames("story__layout", `story__layout-width--${width}`);

  return <div className={classes}>{props.children}</div>;
}
