interface CampsiteDTO {
  campsiteMY: CampsiteMY[];
}

interface CampsiteMY {
  state: string;
  places: Place[];
}

interface Place {
  place: string;
  phoneNumber?: string;
}

export default CampsiteDTO;
