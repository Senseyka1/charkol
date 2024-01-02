// import { Popover } from "antd";
// import React, { Dispatch, SetStateAction, useEffect } from "react";
// import PhoneInput from "react-phone-input-2";

// // import "react-phone-input-2/lib/style.css";

// interface Props {
// 	phoneNumber: string;
// 	// eslint-disable-next-line no-unused-vars
// 	setPhoneNumber: (name: string, value?: string) => void;
// 	setIsValidNumber: Dispatch<SetStateAction<boolean>>;
// 	isPhoneModify?: boolean;
// 	Item: any;
// 	name: string;
// 	isCheckout?: boolean;
// 	error: boolean;
// 	setError: Dispatch<SetStateAction<boolean>>;
// }

// const InputPhoneShipping = (props: Props) => {
// 	const {
// 		phoneNumber,
// 		setPhoneNumber,
// 		setIsValidNumber,
// 		isPhoneModify,
// 		isCheckout,
// 		Item,
// 		name,
// 		error,
// 		setError,
// 	} = props;

// 	const handlePhoneNumberChange = (value: string) => {
// 		if (isPhoneModify) {
// 			setPhoneNumber(value);
// 		} else {
// 			setPhoneNumber("phone", value);
// 		}

// 		if (value?.length > 4) {
// 			setIsValidNumber(true);
// 		} else {
// 			setIsValidNumber(false);
// 		}
// 	};

// 	useEffect(() => {
// 		setIsValidNumber(true);
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, []);

// 	return (
// 		<>
// 			{isCheckout ? (
// 				<Popover content={<p>Required field</p>}>
// 					<Item
// 						name={name}
// 						initialValue={phoneNumber || ""}
// 						rules={[{ required: isPhoneModify ? false : true, message: "Required field", min: 4 }]}
// 						style={{ height: 45, width: "100%" }}>
// 						<PhoneInput
// 							onChange={handlePhoneNumberChange}
// 							onFocus={() => setError(true)}
// 							inputClass={`${error && (!phoneNumber || phoneNumber.length < 4) && "phoneError"}`}
// 							// country={"us"}
// 							// countryCodeEditable={false}
// 							enableSearch
// 							placeholder=" "
// 							value={phoneNumber}
// 							// searchPlaceholder="Search"
// 							specialLabel=""
// 						/>
// 					</Item>
// 				</Popover>
// 			) : (
// 				<Item
// 					name={name}
// 					initialValue={phoneNumber || ""}
// 					rules={[{ required: isPhoneModify ? false : true, message: "Required field", min: 4 }]}
// 					style={{ height: 45, width: "100%" }}>
// 					<PhoneInput
// 						onChange={handlePhoneNumberChange}
// 						onFocus={() => setError(true)}
// 						inputClass={`${error && (!phoneNumber || phoneNumber.length < 4) && "phoneError"}`}
// 						// country={"us"}
// 						// countryCodeEditable={false}
// 						enableSearch
// 						placeholder=" "
// 						value={phoneNumber}
// 						// searchPlaceholder="Search"
// 						specialLabel=""
// 					/>
// 				</Item>
// 			)}
// 		</>
// 	);
// };

// export default InputPhoneShipping;
