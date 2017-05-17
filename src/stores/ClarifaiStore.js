import { observable, computed, action } from 'mobx';
import Clarifai from 'clarifai';
import { CLARIFAI_ID, CLARIFAI_SECRET } from // YANDEX_TRANSLATE_KEY,
'./../../env';
const ClarifaiApp = new Clarifai.App(CLARIFAI_ID, CLARIFAI_SECRET);

const filterOutNoConcepts = concepts =>
  concepts.filter((concept) => {
    concept.value = concept.value.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]; // keeping only 2 digits after decimal
    return !concept.name.startsWith('no ');
  });

export default class ClarifaiStore {
  @observable loading = false;
  @observable concepts = [];

  @computed get isLoading() {
    console.log('this.loading', this.loading);
    return this.loading;
  }

  @action setLoading(loading) {
    this.loading = loading;
  }

  @action async post(imageData) {
    try{
      let response = await ClarifaiApp.models
        .predict(
          { id: Clarifai.GENERAL_MODEL, language: 'ja' },
          { base64: imageData },
        );

        const concepts = response.data.outputs[0].data.concepts
          .slice(0, 10)
          .map(concept => ({
            name: concept.name,
            value: concept.value,
          }));

        this.loading = false;
        this.concepts = filterOutNoConcepts(concepts);

    } catch (error) {
      console.log(error);
    }
  }
}
