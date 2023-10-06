export const useCurrentView = () => useState('currentView', () => null)
export const useNewComponent = () => useState('newComponent', () => {})
export const useNewModule = () => useState('newModule', () => {})
export const useIsPanelOpen = () => useState('isPanelOpen', () => false);