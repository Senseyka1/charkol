// import React, { ReactNode } from "react";

// import { classNames } from "@/lib/classNames/classNames";

// import styles from "./index.module.scss";

// interface Props {
// 	children: ReactNode;
// 	className?: string;
// 	fz?: number;
// 	lHeight?: string | number;
// 	fWeight?: number;
// 	textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
// 	color?: string;
// 	margin?: string | number;
// 	mt?: string | number;
// 	mb?: string | number;
// 	ml?: string | number;
// 	mr?: string | number;
// 	letSpacing?: string;
// 	[otherProps: string]: any;
// }

// const Title = ({
// 	children,
// 	className,
// 	fz,
// 	lHeight,
// 	fWeight,
// 	textAlign,
// 	color,
// 	margin,
// 	mt,
// 	mb,
// 	ml,
// 	mr,
// 	letSpacing,
// 	otherProps,
// }: Props) => {
// 	return (
// 		<h2
// 			className={classNames(styles.title, {}, [className])}
// 			style={{
// 				fontSize: fz,
// 				lineHeight: lHeight,
// 				fontWeight: fWeight,
// 				textAlign: textAlign,
// 				color: color,
// 				margin: margin,
// 				marginTop: mt,
// 				marginBottom: mb,
// 				marginLeft: ml,
// 				marginRight: mr,
// 				letterSpacing: letSpacing,
// 			}}
// 			{...otherProps}>
// 			{children}
// 		</h2>
// 	);
// };

// export default Title;
