import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 0 24 24"
            width="32px"
            fill="#36B37E"
            {...props}
        >
            <Path d="M0 0h24v24H0z" fill="none" />
            <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </Svg>
    )
}

export default CheckIcon
