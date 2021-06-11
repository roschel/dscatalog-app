import { StyleSheet } from 'react-native'

const colors = {
  white: "#FFFFFF",
  lightGray: "#f2f2f2",
  mediumGray: "#9e9e9e",
  borderGray: "#e1e1e1",
  darkGray: "#263238",
  black: "#000",
  primary: "#407bee",
  secondary: "#33569b",
  bluePill: "#407bff61",
  red: "#df5753"
}

const text = StyleSheet.create({
  regular: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.mediumGray
  },
  bold: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: colors.darkGray
  },
  primaryText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 20
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  currency: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.mediumGray
  },
  productPrice: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: "bold"
  }
})

const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    alignItems: 'center',
    justifyContent: 'space-around'
  },
  draw: {
    width: 313,
    height: 225,
  },
  textContainer: {
    paddingHorizontal: 20
  },
  primaryButton: {
    width: 290,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  arrowContainer: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  //Product Card
  scrollContainer: {
    padding: 10
  },

  productCard: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10
  },

  productDescription: {
    width: "100%",
    padding: 20,
    borderTopColor: colors.lightGray,
    borderTopWidth: 1
  },
  priceContainer: {
    flexDirection: "row",
    marginTop: 10
  },

  //Search Innput
  inputContainer: {
    width: "100%",
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    marginVertical: 12.5,
    paddingVertical: 10
  },
  searchInput: {
    width: "90%",
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderGray
  }
})

export { colors, theme, text }