export interface AccessFlags {
  cca?: boolean;
  pos?: boolean;
  inventory?: boolean;
  operations?: boolean;
  manpower?: boolean;
  reports?: boolean;
}

export interface SBSTokenPayload {
  clientId: string;
  role: string;
  accessFlags: AccessFlags;
  memberId: string;
  isDemo: boolean;
  iss: string;
  aud: string;
  exp: number;
  iat: number;
}
