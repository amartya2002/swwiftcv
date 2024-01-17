import { ResumeProfile } from "@/app/lib/redux/types";
import { ResumePDFLink, ResumePDFSection, ResumePDFText } from "./common";
import { spacing, styles } from "./styles";
import { View } from "@react-pdf/renderer";
import { IconType, ResumePDFIcon } from "./common/ResumePDFIcon";

export const ResumePDFProfile = ({
  profile,
  themeColor,
  isPDF,
}: {
  profile: ResumeProfile;
  themeColor: string;
  isPDF: boolean;
}) => {
  const { name, email, phone, url, summary, location } = profile;

  const iconProps = { email, phone, location, url };

  return (
    <ResumePDFSection style={{ marginTop: spacing["8"] }}>
      <ResumePDFText
        themeColor={themeColor}
        style={{ fontSize: "24pt", textAlign: "center"}}
      >
        {name}
      </ResumePDFText>
      <View
        style={{
          ...styles.flexRowBetween,
          flexWrap: "wrap",
          margin: spacing["2.5"],

        }}
      >
        {Object.entries(iconProps).map(([key, value]) => {
          if (!value) return null;

          let iconType = key as IconType;
          if (key === "url") {
            if (value.includes("github")) {
              iconType = "url_github";
            } else if (value.includes("linkedin")) {
              iconType = "url_linkedin";
            }
          }

          const shouldUseLinkWrapper = ["email", "url", "phone"].includes(key);

          const Wrapper = ({ children }: { children: React.ReactNode }) => {
            if (!shouldUseLinkWrapper) return <>{children}</>;

            let src = "";
            switch (key) {
              case "email":
                src = `mailTo:${value}`;
                break;
              case "phone": {
                src = `tel:${value.replace(/[^\d+]/g, "")}`;
                break;
              }
              default: {
                src = value.startsWith("http") ? value : `https://${value}`;
              }
            }

            return (
              <ResumePDFLink src={src} isPDF={isPDF}>
                {children}
              </ResumePDFLink>
            );
          };

          return (
            <View
              key={key}
              style={{
                ...styles.flexRow,
                alignItems: "center",
                gap: spacing["1"],
              }}
            >
              <ResumePDFIcon  type={iconType} isPDF={isPDF} />
              <Wrapper>
                <ResumePDFText style={{color:'#838383'}}>{value}</ResumePDFText>
              </Wrapper>
            </View>
          );
        })}
      </View>
      
      {summary && <ResumePDFText style={{color:'#5B5757'}}>{summary}</ResumePDFText>}

    </ResumePDFSection>
  );
};
