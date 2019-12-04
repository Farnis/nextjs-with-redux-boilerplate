import React, {Fragment} from "react";
import "../../styles/components/marketing/hotel-landing.scss";
import Link from "next/link";
import {Logo, LogoSmall} from "../svg";
import LinkActive from "next-link-active";
import {ExpandMore, Phone} from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Stepper from "../Flight/Stepper/Stepper";
import {connect} from "react-redux";
import {login} from "../../actions/authentication";
import Account from "./Account";
import {red} from "@material-ui/core/colors";

const links = [
    {href: "/flight-dom", label: "پرواز داخلی", soon: false},
    {href: "#", label: "پرواز خارجی", soon: true},
    {href: "/hotel-dom", label: "هتل داخلی", soon: false},
    // { href: "/inter-hotel", label: "هتل خارجی" },
    // { href: "/train", label: "قطار" },
    // { href: "/bus", label: "اتوبوس" },
    // { href: "/trip", label: "سفرساز" },
    // { href: "/social", label: "شبکه اجتماعی" }
];

const TooltipMenu = [
    {href: "/", label: "راهنمای خرید بلیط"},
    {href: "/", label: "راهنمای استرداد بلیط"},
    {href: "/", label: "تماس با ما"},
    {href: "/", label: "قوانین و مقررات"},
    {href: "/", label: "اطلاعات فرودگاهی"}
];

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeClass: "normal",
            currentPos: 0,
            isOpen: false,
            username: "",
            code: ""
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            let activeClass = "scrolled";
            let currentPos = this.state.currentPos;
            if (window.scrollY === 0) {
                activeClass = "normal";
            } else if (currentPos > window.scrollY) {
                activeClass = "normal";
            } else {
                activeClass = "scrolled";
            }
            this.setState({activeClass, currentPos: window.scrollY});
        });
    }

    renderHeaderType = () => {
        if (typeof this.props.type !== undefined && this.props.type === 1) {
            return (
                <Fragment>
                    <Divider className="call-support "/>
                    <div className="mt-4">
                        <ul className={"menu d-flex flex-wrap justify-content-center text-center mb-0"}>
                            {links.map((link, i) => (
                                <li key={i} className="mx-lg-4 mx-xs-0 d-inline-block position-relative">
                                    {link.soon && <div
                                        className="tooltip bg-danger text-10 pt-1 position-absolute coming-soon">بزودی</div>}
                                    <LinkActive href={link.href} passHref>
                                        {active => (
                                            <a className={(active && "active") + " d-inline-block pb-2 px-1"}>
                                                {link.label}
                                            </a>
                                        )}
                                    </LinkActive>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Fragment>
            );
        } else if (typeof this.props.type !== undefined && this.props.type === 2) {
            return <Stepper activeStep={2}/>;
        }
    };

    handleLogin = e => {
        this.setState({username: e.target.value});
    };

    handleSendUserName = () => {
        this.props.login({userName: this.state.username});
    };

    handleCode = e => {
        this.setState({code: e.target.value});
    };

    handleSendCode = () => {
        this.props.setToken({
            userName: this.state.username,
            password: null,
            verificationCode: this.state.code,
            grantType: "VerificationCode",
            isPersistence: true,
            clientIp: null,
            clientId: 1,
            refreshToken: null
        });
    };

    render() {
        const {isOpen} = this.state;
        return (
            <React.Fragment>
                <nav className={`header container-fluid  ${this.state.activeClass}`}>
                    <div className={"d-flex row mt-3 custom-container"}>
                        <Link href="/">
                            <a className={"small-logo"}>
                                <LogoSmall/>
                            </a>
                        </Link>
                        <div className="col-xs-12 col-md-3 col-sm-3 text-right">
                            <Account />
                        </div>
                        <div className={"col-xs-12 col-md-6 col-sm-6 text-center"}>
                            <Link href="/">
                                <a className={"logo"}>
                                    <Logo/>
                                </a>
                            </Link>
                        </div>
                        <ClickAwayListener
                            onClickAway={() => this.setState({isOpen: false})}
                        >
                            <div className={"display-non col-xs-12 col-md-3 col-sm-3 text-left"}>
                                <button
                                    onClick={() => this.setState({isOpen: !isOpen})}
                                    className="text border-0 d-block w-100 pointer text-left"
                                >
                                    <small className="fa-num ml-1 justify-content-start">پشتیبانی 24ساعته</small>
                                    <b className="fa-num">
                                        500 400 71 - 021
                                        <Phone className="phone-icon hide-resp justify-content-center"/>
                                        <ExpandMore className="expandMore-icon justify-content-center"/>
                                    </b>
                                </button>
                                <Grow in={isOpen}>
                                    <Paper elevation={4} className="cartTooltip">
                                        {/*<div className="ExpandMore">*/}
                                        {/*  */}
                                        {/*</div>*/}

                                        <div className="headerTooltip">
                                            <p
                                                className={
                                                    "fa-num text-14 line-height-27 my-0 font-weight-bold"
                                                }
                                            >
                                                پشتیبانی
                                                <b
                                                    className=" fa-num mx-1"
                                                    style={{color: "#e73137"}}
                                                >
                                                    24
                                                </b>
                                                ساعته
                                                <br/>
                                                <a className={"fa-num text-18"}>500 400 71 - 021</a>
                                            </p>
                                        </div>
                                        <Divider variant="middle"/>
                                        <div>
                                            <ul className="pr-3 ">
                                                {TooltipMenu.map((item, i) => (
                                                    <li className={"contentTooltip my-2"} key={i}>
                                                        <Link href={item.href}>
                                                            <a className={"text text-13 text-black"}>
                                                                {item.label}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Paper>
                                </Grow>
                            </div>

                        </ClickAwayListener>
                    </div>
                    {this.renderHeaderType()}
                </nav>
                <div className="position-fixed call-support">
                    <a href="tel:+2171400500">
                        <img alt="" className="fixed-bottom pointer" src="/static/img/Call_to_Support.svg"/>
                    </a>
                </div>
            </React.Fragment>
        );
    }
}

// const mapStateToProps = state => ({
//   userInfo: state.authentication.userInfo
// });

export default connect(
    null,
    {login}
)(Header);
