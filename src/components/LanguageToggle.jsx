import { Button } from "@mui/material";

export default function LanguageToggle({ setLang }) {
  return (
    <>
      <Button onClick={() => setLang("en")}>English</Button>
      <Button onClick={() => setLang("kn")}>ಕನ್ನಡ</Button>
    </>
  );
}