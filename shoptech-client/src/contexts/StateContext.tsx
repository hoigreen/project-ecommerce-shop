"use client"
import { createContext, useEffect, useMemo, useRef, useState, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

interface State {
  isSidebarOpen: boolean;
  isDrawerOpen: boolean;
  isBulkDrawerOpen: boolean;
  isModalOpen: boolean;
  isAllocateModalOpen: boolean;
  isOpportunityModalOpen: boolean;
  isUpdate: boolean;
  lang: string;
  time: string;
  sortedField: string;
  typeLead: string;
  currentPage: number;
  searchText: string | null;
  invoice: string | null;
  zone: string;
  status: string;
  category: any;
  startDate: string;
  endDate: string;
  modalOpen: boolean;
  windowDimension: number;
  loading: boolean;
  navBar: boolean;
  tabIndex: number;
  queryParams: object;
  selectedProductFactor: string;
  isEventClientModalOpen: boolean;
  isView: boolean;
}

interface StateContextType {
  state: State;
  updateState: (newState: Partial<State>) => void;
}

// create context
export const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider = ({ children }: PropsWithChildren<{}>) => {
  const initialState: State = {
    isSidebarOpen: false,
    isDrawerOpen: false,
    isBulkDrawerOpen: false,
    isModalOpen: false,
    isAllocateModalOpen: false,
    isOpportunityModalOpen: false,
    isUpdate: false,
    lang: "en",
    time: "",
    sortedField: "",
    typeLead: "",
    currentPage: 1,
    searchText: null,
    invoice: null,
    zone: "",
    status: "",
    category: null,
    startDate: "",
    endDate: "",
    modalOpen: false,
    windowDimension: 0,
    loading: false,
    navBar: true,
    tabIndex: 0,
    queryParams: {},
    selectedProductFactor: "",
    isEventClientModalOpen: false,
    isView: false,
  };

  const [state, setState] = useState<State>(initialState);

  const updateState = (newState: Partial<State>) => {
    setState({ ...state, ...newState });
  };

  const resultsPerPage = 20;
  const searchRef = useRef("");
  const invoiceRef = useRef("");

  const [limitData, setLimitData] = useState(20);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBulkDrawerOpen, setIsBulkDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAllocateModalOpen, setIsAllocateModalOpen] = useState(false);
  const [isOpportunityModalOpen, setIsOpportunityModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [lang, setLang] = useState("en");
  const [time, setTime] = useState("");
  const [sortedField, setSortedField] = useState("");
  const [typeLead, setTypeLead] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState(null);
  const [invoice, setInvoice] = useState(null);
  const [zone, setZone] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState(0);
  const [loading, setLoading] = useState(false);
  const [navBar, setNavBar] = useState(true);
  const { i18n } = useTranslation();
  const [tabIndex, setTabIndex] = useState(0);
  const [queryParams, setQueryParams] = useState({});
  const [selectedProductFactor, setSelectedProductFactor] = useState("");
  const [isEventClientModalOpen, setIsEventClientModalOpen] = useState(false);
  const [isView, setIsView] = useState(false);

  const initPopupState = useMemo(
    () => ({
      clientEvent: false,
      clientNote: false,
      clientClaim: false,
      clientAgree: false,
      clientQoutate: false,
      id: "",
    }),
    []
  );
  const [isPopupOpen, setIsPopupOpen] = useState(initPopupState);

  const closePopup = () => setIsPopupOpen(initPopupState);

  // const closeSidebar = () => updateState(isSidebarOpen: false);
  // const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleViewStatus = () => setIsView(!isView);

  const closeDrawer = () => {
    setIsView(false)
    setIsDrawerOpen(false);
  };
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
    setIsView(true)
  };

  const closeBulkDrawer = () => setIsBulkDrawerOpen(false);
  const toggleBulkDrawer = () => setIsBulkDrawerOpen(!isBulkDrawerOpen);

  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const closeAllocateModal = () => setIsAllocateModalOpen(false);
  const toggleAllocateModal = () =>
    setIsAllocateModalOpen(!isAllocateModalOpen);

  const closeOpportunityModal = () => setIsOpportunityModalOpen(false);
  const toggleOpportunityModal = () =>
    setIsOpportunityModalOpen(!isOpportunityModalOpen);

  const [isBasicInfoCollapsed, setIsBasicInfoCollapsed] = useState(false);
  const handleBasicInfoToggle = () =>
    setIsBasicInfoCollapsed(!isBasicInfoCollapsed);

  const [isRequestInfoCollapsed, setIsRequestInfoCollapsed] = useState(false);
  const handleRequestInfoToggle = () =>
    setIsRequestInfoCollapsed(!isRequestInfoCollapsed);

  const [isContractInfoCollapsed, setIsContractInfoCollapsed] = useState(false);
  const handleContractInfoToggle = () =>
    setIsContractInfoCollapsed(!isContractInfoCollapsed);

  const [isAdditionalInfoCollapsed, setIsAdditionalInfoCollapsed] =
    useState(false);
  const handleAdditionalInfoToggle = () =>
    setIsAdditionalInfoCollapsed(!isAdditionalInfoCollapsed);

  const [isPaymentInfoCollapsed, setIsPaymentInfoCollapsed] = useState(false);
  const handlePaymentInfoToggle = () =>
    setIsPaymentInfoCollapsed(!isPaymentInfoCollapsed);

  const [isComponentMounted, setIsComponentMounted] = useState(false);
  const handleComponentMountedToggle = () =>
    setIsComponentMounted(!isComponentMounted);

  const closeEventClientModal = () => setIsEventClientModalOpen(false);
  const toggleEventClientModal = () =>
    setIsEventClientModalOpen(!isEventClientModalOpen);

  const [isNoChecked, setIsNoChecked] = useState(false);
  const [isYesChecked, setIsYesChecked] = useState(false);

  const [isAddCaseModalOpen, setIsAddCaseModalOpen] = useState(false)
  const closeAddCaseModal = () => setIsAddCaseModalOpen(false);
  const toggleAddCaseModal = () => setIsAddCaseModalOpen(!isAddCaseModalOpen);

  const [isMarkInvalidModalOpen, setIsMarkInvalidModalOpen] = useState(false)
  const closeMarkInvalidModal = () => setIsMarkInvalidModalOpen(false);
  const toggleMarkInvalidModal = () => setIsMarkInvalidModalOpen(!isMarkInvalidModalOpen);

  const [isCaseProductInfoCollapsed, setIsCaseProductInfoCollapsed] = useState(false);
  const handleCaseProductInfoToggle = () =>
    setIsCaseProductInfoCollapsed(!isCaseProductInfoCollapsed);

  const handleNoClick = () => {
    setIsNoChecked(true);
    setIsYesChecked(false);
  };

  const handleYesClick = () => {
    setIsNoChecked(false);
    setIsYesChecked(true);
  };

  const [isLockModalOpen, setIsLockModalOpen] = useState(false);
  const closeLockModal = () => setIsLockModalOpen(false);
  const toggleLockModal = () => setIsLockModalOpen(!isLockModalOpen);

  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false)
  const closeAddClientModal = () => setIsAddClientModalOpen(false);
  const toggleAddClientModal = () => setIsAddClientModalOpen(!isAddClientModalOpen);

  const [isAddLeadWarningModalOpen, setIsAddLeadWarningModalOpen] = useState(false)
  const closeAddLeadWarningModal = () => setIsAddLeadWarningModalOpen(false);
  const toggleAddLeadWarningModal = () => setIsAddLeadWarningModalOpen(!isAddLeadWarningModalOpen);

  const handleChangePage = (p: number) => {
    setCurrentPage(p);
  };

  const handleSubmitForAll = (e: any) => {
    e.preventDefault();
    setCategory(null);
    setIsUpdate(true);
  };

  const handleSubmitSearch = (e: any) => {
    e.preventDefault();
    setIsUpdate(true);
  };

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StateContext.Provider value={{ state, updateState }}>
      {children}
    </StateContext.Provider>
  );
};
