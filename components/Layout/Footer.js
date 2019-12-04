import Link from "next/link";
import {Logo} from "../Svg";

import {
  Twitter,
  Aparat,
  Facebook,
  Instagram,
  Telegram,
  LinkedIn
} from "../Svg/Socials";
import Button from "@material-ui/core/Button";

const helpLinks = [
  // {href: "/", label: "راهنمای خرید"},
  {href: "/qa", label: "سوالات متداول"},
  {href: "/complaints-or-suggestions", label: "ارسال شکایت یا پیشنهادات"},
  {href: "/rules", label: "سیاست ها و قوانین"},
  // {href: "/", label: "امنیت و حریم خصوصی"}
];
const conectLinks = [
  {href: "/about", label: "درباره ما"},
  {href: "/contact", label: "تماس با ما"},
  {href: "/contact", label: "همکاری با تیکا"}
];
const socials = [
  {href: "https://www.aparat.com/tickatravels", name: "aparat", label: <Aparat/>},
  {href: "https://twitter.com/tickatravels", name: "twitter", label: <Twitter/>},
  {href: "https://www.facebook.com/tickatravels", name: "facebook", label: <Facebook/>},
  {href: "https://www.instagram.com/tickatravels", name: "instagram", label: <Instagram/>},
  {href: "https://telegram.me/tickatravels", name: "telegram", label: <Telegram/>},
  {href: "https://www.linkedin.com/company/tickatravel", name: "linkedin", label: <LinkedIn/>}
];

const lowerLinks = [
  {href: "/", label: "کوکی ها"},
  {href: "/", label: "نقشه سایت"},
  {href: "/", label: "همکاری با تیکا"}
];

const Footer = () => <footer className={"footer "}>
  <div className={"container py-3"}>
    <div className={"row"}>
      <div className="col-xs-12 col-sm-3">
        <Link href="/">
          <a className={"logo"}>
            <Logo/>
          </a>
        </Link>
        <p className={"text text-grey fa-num"}>
          آدرس: تهران - خیابان شریعتی - نبش خیابان دولت - برج تجاری نگین
          قلهک - واحد 75
          <br/>
          کد پستی: 123456789
        </p>
        <h2 className={"fa-num"}>500 400 71 - 021</h2>
      </div>
      <div className={"col-xs-12 col-sm-3"}>
        <ul className={""}>
                    <span className={"text font-weight-bold mb-2 d-block"}>
                        مطالب پربازدید
  </span>
          {helpLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <a className={"text text-grey"}>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={"col-xs-12 col-sm-3"}>
        <ul className={""}>
                    <span className={"text font-weight-bold mb-2 d-block"}>
                        ارتباط با تیکا
  </span>
          {conectLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <a className={"text text-grey"}>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={"d-flex socials row"}>
          {socials.map((link, i) => (
            <li key={i} className={"ml-2 col-xs-12"}>
              <Link href={link.href}>
                <a className={"text text-grey " + link.name} rel="nofollow">
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={"col-xs-12 col-sm-3"}>
                <span className={"text font-weight-bold mb-2 d-block"}>
                    مجوزهای تیکا
        </span>
        <div className="ticka-license">
          <div className="row">
            <div className="col-3 col-md">
              <a href="#" className="card-1 mini-radius" rel="nofollow">
                <img
                  src="https://trustseal.enamad.ir/logo.aspx?id=116867&amp;p=VVKeLjvbqGXVYaft"
                  onClick={() =>
                    window.open(
                      "https://trustseal.enamad.ir/Verify.aspx?id=116867&p=VVKeLjvbqGXVYaft",
                      "Popup",
                      "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                    )
                  }
                  alt=""
                  id="VVKeLjvbqGXVYaft"
                />
              </a>
            </div>
            <div className="col-3 col-md">
              <a href="#" className="card-1 mini-radius" rel="nofollow">
                <img
                  id="jxlzwlaorgvjsizpsizpapfu"
                  onClick={() =>
                    window.open(
                      "https://logo.samandehi.ir/Verify.aspx?id=143995&p=rfthaodsxlaopfvlpfvldshw",
                      "Popup",
                      "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30"
                    )
                  }
                  alt="logo-samandehi"
                  src="https://logo.samandehi.ir/logo.aspx?id=143995&p=nbpdshwlqftibsiybsiyujyn"
                />
              </a>
            </div>
            <div className="col-3 col-md">
              <a href="#" className="card-1 mini-radius" rel="nofollow">
                <img
                  src="/static/passenger-right.svg"
                  alt="سامانه حقوق مسافرین"
                  onClick={() =>
                    window.open(
                      "https://www.cao.ir/paxrights",
                      "Popup",
                      "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                    )
                  }
                />
              </a>
            </div>
            <div className="col-3 col-md">
              <a href="#" className="card-1 mini-radius" rel="nofollow">
                <img
                  src="/static/aira.png"
                  alt="انجمن شرکتهای هواپیمایی ایران"
                  onClick={() =>
                    window.open(
                      "http://aira.ir/",
                      "Popup",
                      "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                    )
                  }
                />
                {/* <img src={PassengerRight} alt="سامانه حقوق مسافرین" onClick={() => window.open('https://www.cao.ir/paxrights', 'Popup', 'toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30')} /> */}
              </a>
            </div>
            <div className="w-100 button-footer">
              <Button
                variant="outlined"
                color="primary"
                className=" mt-2 w-100 bg-white"
              >
                مشاهده همه مجوزها
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className={"py-2 lower"}>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <ul className={"d-flex my-1"}>
            {lowerLinks.map((link, i) => (
              <li key={i} className={"ml-3"}>
                <Link href={link.href}>
                  <a className={"text"}>{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-xs-12 col-sm-6">
          <p className={"text-left my-1 text-white"}>
            © تمامی حقوق برای برند تیکا محفوظ است.
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>;

export default Footer;
