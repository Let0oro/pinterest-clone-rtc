import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "F67_u_QZuU7iZabH5BfBMeMrsAm3S9jjsU_-nkso2kI",
});

export const fetchApi = async () => {
  try {
    const { response } = await unsplash
    .photos.list({ page: 1, perPage: 25 });
    const {results} = response;
    return results;
  } catch (error) {
    console.error({error})
  }
};
