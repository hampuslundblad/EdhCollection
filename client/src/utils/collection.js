import ScryfallService from "../services/ScryfallService.ts";
import CollectionService from "../services/CollectionService.ts";

export function addCard(formValues, userId)
try {
    const response = await ScryfallService.searchCard(
      formValues.value.cardName
    );
    let price;
    if (formValues.value.selectedFoil === "Yes") {
      price = response.priceEurFoil;
    } else {
      price = response.priceEur;
    }
    await CollectionService.addCard({
      collectionName: formValues.value.selectedCollection.toLowerCase(),
      userId: userId,
      card: {
        name: response.name,
        price: price,
        set: response.set,
        quantity: formValues.value.quantity,
        foil: formValues.value.selectedFoil,
        imageUrl: response.imageUri,
      },
    });
}
catch(error){console.log(error)}