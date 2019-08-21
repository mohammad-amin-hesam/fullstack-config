import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import UserIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import Link from "next/link";
import "../../scss/style.scss";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const SpanBox = props => {
  return (
    <Box
      component="span"
      color="#fff"
      p="10px"
      margin="15px 5px"
      borderRadius="5px"
      textAlign="center"
      display="inline-block"
      bgcolor="#666666"
      fontSize=".8rem"
      style={props.style}
    >
      {props.title || props.children}
    </Box>
  );
};

const BtnBox = props => {
  const classess = useStyles();

  return (
    <Button
      style={{ float: "right", marginTop: "20px", fontSize: ".75rem" }}
      variant="contained"
      className={classess.button}
    >
      {props.children}
      {props.title}
    </Button>
  );
};

const Header = () => (
  <Box component="header" bgcolor="#444">
    <Container component="nav">
      <SpanBox
        style={{
          backgroundColor: "transparent",
          fontSize: "1rem"
        }}
        title="Welcome to sotial Media"
      />
      <BtnBox title="Sign In">
        <LockIcon
          style={{
            height: 18,
            width: 18,
            color: "#444",
            margin: "-3px 5px 0 0"
          }}
        />
      </BtnBox>
      <Link href="/register">
        <h2 className="title">Hello there</h2>
        <div style={{ display: "inline" }}>
          <BtnBox title="Sign Up">
            <UserIcon
              style={{
                height: 18,
                width: 18,
                color: "#444",
                margin: "-3px 5px 0 0"
              }}
            />
          </BtnBox>
        </div>
      </Link>
    </Container>
  </Box>
);

export default Header;
