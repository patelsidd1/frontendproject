import { Default } from "react-toastify/dist/utils";

class Device {
    id: number | null;
    enabled: boolean;
  
    constructor(id: number | null, enabled: boolean) {
      this.id = id;
      this.enabled = enabled;
    }
  
    static parse(json: string): Device {
      const data = JSON.parse(json);
      const id = data.id !== null ? parseInt(data.id) : null;
      const enabled = Boolean(data.enabled);
      return new Device(id, enabled);
    }
  }
export default Device;  