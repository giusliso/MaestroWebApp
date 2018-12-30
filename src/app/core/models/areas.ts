export type Area =
  | 'Scene'
  | 'Scenarios'
  | 'LearningPath'
  | 'Target'
  | 'Contents';

export const Area = {
    Scene: 'SystemAdministrator' as Area,
    Scenarios: 'NetworkManager' as Area,
    LearningPath: 'GroupManager' as Area,
    Target: 'InstrumentUser' as Area,
    Contents: 'UnassignedUser' as Area
};