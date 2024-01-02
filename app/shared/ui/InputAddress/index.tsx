// /* eslint-disable react/no-unknown-property */
// /* eslint-disable no-unused-vars */
// import { Popover } from "antd";
// import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
// import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";

// import { IActivityCountry } from "@/modules/Country";
// import { googleMaps } from "@/utils/constants";

// import styles from "./index.module.scss";

// interface Props {
// 	address: string;
// 	activeCountry: IActivityCountry;
// 	onChange: (value: string, key: string) => void;
// 	errorAddress: boolean;
// 	setErrorAddress: Dispatch<SetStateAction<boolean>>;
// 	setCity: Dispatch<SetStateAction<string>>;
// 	setPostCode: Dispatch<SetStateAction<string>>;
// 	setState: Dispatch<SetStateAction<string>>;
// 	show: boolean;
// 	setShow: Dispatch<SetStateAction<boolean>>;
// }

// const GoogleAddressAutocomplete = ({
// 	errorAddress,
// 	setPostCode,
// 	setState,
// 	setCity,
// 	setErrorAddress,
// 	address,
// 	onChange,
// 	activeCountry,
// 	show,
// 	setShow,
// }: Props) => {
// 	const [isNotFirstRender, setIsNotFirstRender] = useState(false);

// 	const { placesService, placePredictions, getPlacePredictions } = useGoogle({
// 		// debounce: 200,
// 		// @ts-ignore
// 		options: {
// 			types: ["geocode"],
// 			componentRestrictions: { country: activeCountry?.code?.toLowerCase() },
// 		},
// 		language: "en",
// 		apiKey: googleMaps,
// 	});

// 	// @ts-ignore
// 	const handlePlace = (place: google.maps.places.PlaceResult) => {
// 		const postCode = place?.address_components?.filter((item) =>
// 			item?.types?.includes("postal_code")
// 		);

// 		const city = place?.address_components?.filter((item) => item?.types?.includes("locality"));

// 		const state = place?.address_components?.filter((item) =>
// 			item?.types?.includes("administrative_area_level_1")
// 		);

// 		if (state) {
// 			setState(state[0].long_name);
// 		}

// 		if (postCode) {
// 			setPostCode(postCode[0]?.long_name);
// 		}

// 		if (city) {
// 			setCity(city[0]?.long_name);
// 		}

// 		// const address = place?.address_components?.filter(
// 		//  (item) =>
// 		//      item?.types?.includes("route") ||
// 		//      item?.types?.includes("locality") ||
// 		//      item?.types?.includes("administrative_area_level_1") ||
// 		//      item?.types?.includes("country")
// 		// );

// 		if (place?.formatted_address) {
// 			return onChange("streetName", place?.name || "");
// 		}
// 	};

// 	useEffect(() => {
// 		if (address?.length >= 1) {
// 			setErrorAddress(false);
// 		}
// 		if (address?.length) {
// 			setErrorAddress(false);

// 			setIsNotFirstRender(true);
// 		}
// 		if (!address?.length && isNotFirstRender) {
// 			setErrorAddress(true);
// 		}
// 	}, [address, isNotFirstRender, onChange, setErrorAddress]);

// 	return (
// 		<Popover content={<p>Required field</p>}>
// 			<div className="floating-label-input">
// 				<input
// 					// @ts-ignore
// 					options={{
// 						types: ["geocode"],
// 						componentRestrictions: { country: activeCountry?.code?.toLowerCase() },
// 					}}
// 					type="text"
// 					className={`${styles.input} ${errorAddress && styles.errorInput}`}
// 					placeholder=" "
// 					onChange={(e) => {
// 						getPlacePredictions({
// 							input: e.target.value,
// 						});
// 						onChange("streetName", e.currentTarget.value);
// 						setShow(true);
// 					}}
// 					value={address}
// 				/>

// 				<label>
// 					ADDRESS <span className="requiredInputStar">*</span>
// 				</label>

// 				<ul
// 					className={`${styles.modal} ${show && styles.open}`}
// 					onClick={(e) => e.stopPropagation()}>
// 					{placePredictions.map((item) => {
// 						return (
// 							<li
// 								key={item?.place_id}
// 								onClick={() => {
// 									setShow(false);

// 									placesService?.getDetails(
// 										{ placeId: item.place_id },
// 										// @ts-ignore
// 										(placeDetails) => handlePlace(placeDetails) //HERE WILL BE ADDRESS_COMPONENT
// 									);
// 								}}>
// 								{item?.description}
// 							</li>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 			<p style={{ color: "#ff4d4f", fontWeight: 600, height: 24 }}>
// 				{errorAddress && "Required field"}
// 			</p>
// 		</Popover>
// 	);
// };

// export default GoogleAddressAutocomplete;

// /* eslint-disable no-unused-vars */
// // import { Popover } from "antd";
// // import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
// // import Autocomplete from "react-google-autocomplete";

// // import { IActivityCountry } from "@/modules/Country";
// // import { googleMaps } from "@/utils/constants";

// // import styles from "./index.module.scss";

// // interface Props {
// // 	address: string;
// // 	activeCountry: IActivityCountry;
// // 	onChange: (value: string, key: string) => void;
// // 	errorAddress: boolean;
// // 	setErrorAddress: Dispatch<SetStateAction<boolean>>;
// // 	setCity: Dispatch<SetStateAction<string>>;
// // 	setPostCode: Dispatch<SetStateAction<string>>;
// // 	setState: Dispatch<SetStateAction<string>>;
// // }

// // const GoogleAddressAutocomplete = ({
// // 	errorAddress,
// // 	setPostCode,
// // 	setState,
// // 	setCity,
// // 	setErrorAddress,
// // 	address,
// // 	onChange,
// // 	activeCountry,
// // }: Props) => {
// // 	const [isNotFirstRender, setIsNotFirstRender] = useState(false);

// // 	const handlePlace = (place: google.maps.places.PlaceResult) => {
// // 		const postCode = place?.address_components?.filter((item) =>
// // 			item?.types?.includes("postal_code")
// // 		);

// // 		const city = place?.address_components?.filter((item) => item?.types?.includes("locality"));

// // 		const state = place?.address_components?.filter((item) =>
// // 			item?.types?.includes("administrative_area_level_1")
// // 		);

// // 		if (state) {
// // 			setState(state[0].long_name);
// // 		}

// // 		if (postCode) {
// // 			setPostCode(postCode[0]?.long_name);
// // 		}

// // 		if (city) {
// // 			setCity(city[0]?.long_name);
// // 		}

// // 		// const address = place?.address_components?.filter(
// // 		// 	(item) =>
// // 		// 		item?.types?.includes("route") ||
// // 		// 		item?.types?.includes("locality") ||
// // 		// 		item?.types?.includes("administrative_area_level_1") ||
// // 		// 		item?.types?.includes("country")
// // 		// );

// // 		if (place?.formatted_address) {
// // 			onChange("streetName", place?.formatted_address);
// // 		}
// // 	};

// // 	useEffect(() => {
// // 		if (address?.length >= 1) {
// // 			setErrorAddress(false);
// // 		}
// // 		if (address?.length) {
// // 			setErrorAddress(false);

// // 			setIsNotFirstRender(true);
// // 		}
// // 		if (!address?.length && isNotFirstRender) {
// // 			setErrorAddress(true);
// // 		}
// // 	}, [address, isNotFirstRender, onChange, setErrorAddress]);

// // 	return (
// // 		<Popover content={<p>Required field</p>}>
// // 			<div className="floating-label-input">
// // 				<Autocomplete
// // 					apiKey={googleMaps}
// // 					className={`${styles.input} ${errorAddress && styles.errorInput}`}
// // 					onPlaceSelected={(place) => {
// // 						handlePlace(place);
// // 					}}
// // 					options={{
// // 						types: ["geocode"],
// // 						componentRestrictions: { country: activeCountry?.code?.toLocaleLowerCase() },
// // 					}}
// // 					// @ts-ignore
// // 					value={address}
// // 					onChange={(e) => {
// // 						onChange("streetName", e.currentTarget.value);
// // 					}}
// // 					defaultValue={address}
// // 					placeholder=" "
// // 				/>
// // 				<label>
// // 					ADDRESS <span className="requiredInputStar">*</span>
// // 				</label>
// // 			</div>
// // 			<p style={{ color: "#ff4d4f", fontWeight: 600, height: 24 }}>
// // 				{errorAddress && "Required field"}
// // 			</p>
// // 		</Popover>
// // 	);
// // };

// // export default GoogleAddressAutocomplete;
