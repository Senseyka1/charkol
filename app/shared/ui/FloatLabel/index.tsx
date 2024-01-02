// import React, { ReactNode, useState } from "react";

// interface Props {
// 	children: ReactNode;
// 	label: string;
// 	value: string;
// 	isRequired?: boolean;
// 	fullWidth?: boolean;
// }

// const FloatLabel = (props: Props) => {
// 	const { children, label, value, isRequired, fullWidth } = props;

// 	const [focus, setFocus] = useState(false);

// 	const labelClass = focus || (value && value?.length !== 0) ? "label label-float" : "label";

// 	return (
// 		<div
// 			style={{ width: fullWidth && "100%" }}
// 			className="float-label"
// 			onBlur={() => setFocus(false)}
// 			onFocus={() => setFocus(true)}>
// 			{children}
// 			<label className={labelClass}>
// 				{label}
// 				{isRequired && <span className="requiredInputStar">*</span>}
// 			</label>
// 		</div>
// 	);
// };

// export default FloatLabel;
