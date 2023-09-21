import React from "react";
import { FaGithub, FaGlobe, FaLinkedin, FaSuitcase, FaTwitter, FaUser, FaUserAlt } from "react-icons/fa";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";

import DisplayPicture from "/public/assets/dp.png"

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1b1f24",
    color: "#fff",
    width: "100%",
    display: "flex",
    paddingLeft: 30,
    paddingTop: 30,
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  innerContainer: {
    width: "50%",
  },
  socialContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
    marginTop: 10,
    marginBottom: 20,
  },
  imageContainer: {
    width: "30%",
  }
});

const Frokesy = () => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.header}>
          <View style={styles.innerContainer}>
            <Text style={styles.headerText}>I&apos;m Ayanfeoluwa Akindele, a frontend engineer.</Text>
            <View style={styles.socialContainer}>
              <FaGithub size={20} />
              <FaTwitter size={20} color="#0e6e97" />
              <FaGlobe size={20} />
              <FaLinkedin size={20} color="#0e6e97" />
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image src={"/public/assets/dp.png"} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Frokesy;
