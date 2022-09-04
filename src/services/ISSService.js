import CustomAxios from "./CustomAxios";

const ISSService = {
    getISSLocation: () => {
        return CustomAxios.get("");
    }
}

export default ISSService;