import { Text } from "../atom/text";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { BaseStyles } from "../theme";
import { Line } from "../atom/line";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { sideBarToggle } from "../../store/slices/toggleSlice";
import axios from "axios";

interface SideNavBarProps {
    mainLink: string;
    goalLink: string;
    planLink: string;
    profileLink: string;
}

export const SideNavBarMobile = ({ mainLink, goalLink, planLink, profileLink }: SideNavBarProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div style={{ position: "fixed", top: 0, right: "-182px", transitionDuration: "0.5s" }} onClick={() => dispatch(sideBarToggle())}>
            <MobileBox>
                <Flex flexDirection="column" alignItems="center" justifyContent="flex-start" height="100%">
                    <MarginBox marginBottom="6rem" />
                    <div onClick={ async () => {
                        await axios("https://wilimbackend.tk/userSchemaAPI/logout")
                        .then(res => {
                            if(res.status < 400) {
                                window.location.href = "https://front.wilimbackend.tk";
                                // navigate("/");
                                console.log("logout!");
                            }
                        }); 
                    }}>
                    <Text
                        innerText="WILIM"
                        fontSize={BaseStyles.Text.Heading2}
                        fontWeight={BaseStyles.Text.Border1}
                        textAlign="center"
                        color={BaseStyles.Color.Orange2}
                    />
                    </div>
                    <MarginBox marginBottom="6rem" />
                    <Line width="40%" height="1px" color="#dddddd" />
                    <MarginBox marginBottom="7rem" />
                    <Link to={mainLink} style={{ textDecoration: "none" }}>
                        <Text
                            innerText="Main"
                            color="Gray"
                            fontSize="24px"
                            fontWeight={BaseStyles.Text.Border2}
                            textAlign="center"
                            hoverColor="White"
                        />
                    </Link>
                    <MarginBox marginBottom="6rem" />
                    <Link to={goalLink} style={{ textDecoration: "none" }}>
                        <Text
                            innerText="Goal"
                            color="Gray"
                            fontSize="24px"
                            fontWeight={BaseStyles.Text.Border2}
                            textAlign="center"
                            hoverColor="White"
                        />
                    </Link>
                    <MarginBox marginBottom="6rem" />
                    <Link to={planLink} style={{ textDecoration: "none" }}>
                        <Text
                            innerText="Plan"
                            color="Gray"
                            fontSize="24px"
                            fontWeight={BaseStyles.Text.Border2}
                            textAlign="center"
                            hoverColor="White"
                        />
                    </Link>
                    <MarginBox marginBottom="6rem" />
                    <Link to={profileLink} style={{ textDecoration: "none" }}>
                        <Text
                            innerText="Profile"
                            color="Gray"
                            fontSize="24px"
                            fontWeight={BaseStyles.Text.Border2}
                            textAlign="center"
                            hoverColor="White"
                        />
                    </Link>
                </Flex>
            </MobileBox>
        </div>
    );
};

const MobileBox = styled.div`
    width: 150px;
    height: 100vh;
    background-color: ${BaseStyles.Color.Black4};
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`