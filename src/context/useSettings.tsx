import { create } from "zustand";

interface settingState {
    deploymentMode: "GID" | "cPanel" | "VPS";
    changeDeploymentMode: (type: "GID" | "cPanel" | "VPS") => void;
}

const useSetting = create<settingState>()(set => ({
    deploymentMode: "GID",
    changeDeploymentMode: type => {
        set(() => ({
            deploymentMode: type,
        }));
    },
}));

export default useSetting;
