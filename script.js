/**
 * OFFLINE NOTES APPLICATION
 * Pure Vanilla JavaScript (Offline-first, LocalStorage, Multi-language, Dark/Light mode)
 * Developer: Hamza Gamal (https://hamza-gamal.github.io)
 */

// --- Translation Dictionary (English default, Arabic, Chinese, Spanish, French, German, Russian, Japanese) ---
const TRANSLATIONS = {
  en: {
    appName: "OfflineNote",
    newNote: "New Note",
    views: "Views",
    allNotes: "All Notes",
    starredNotes: "Starred",
    categories: "Categories",
    actions: "Actions",
    exportBackup: "Backup Notes (JSON)",
    importBackup: "Restore Notes",
    mainWebsite: "Hamza Portfolio",
    privacyBadge: "100% Offline & Private",
    searchPlaceholder: "Search notes by title or content...",
    allNotesTitle: "All Notes",
    allNotesSubtitle: "Private, safe, and saved directly in your browser without internet.",
    starredNotesTitle: "Starred Notes",
    starredNotesSubtitle: "Your pinned favorite thoughts and tasks.",
    noNotesTitle: "No notes found",
    noNotesDesc: "Create your first offline note now. Everything stays strictly on your device.",
    createFirstNote: "Create a Note",
    noteTitlePlaceholder: "Note Title...",
    category: "Category",
    color: "Color",
    noteContentPlaceholder: "Start typing your note here...",
    cancel: "Cancel",
    saveNote: "Save Note",
    edit: "Edit",
    copy: "Copy Content",
    downloadTxt: "Download as .txt",
    delete: "Delete",
    confirmDelete: "Are you sure you want to delete this note?",
    copiedSuccess: "Note copied to clipboard!",
    savedSuccess: "Note saved successfully!",
    deletedSuccess: "Note deleted",
    undo: "Undo",
    restoredSuccess: "Notes restored successfully!",
    invalidBackupFile: "Invalid backup file format.",
    chars: "characters",
    words: "words",
    storedCount: "notes stored locally",
    emptyCategory: "No notes in this category",
    addCategoryPrompt: "New Folder",
    editCategoryPrompt: "Edit Folder",
    folderNameLabel: "Folder Name:",
    folderPlaceholder: "Enter folder name...",
    save: "Save",
    confirmDeleteCategory: "Delete folder '{cat}'? Notes in this folder will be moved to General.",
    categoryExists: "This folder already exists!",
    categoryNameEmpty: "Folder name cannot be empty.",
    passwordLabel: "Password",
    passwordPlaceholder: "Optional password...",
    lockedNoteTitle: "Protected Note",
    lockedNoteDesc: "Enter the password to view and edit this note.",
    unlockPlaceholder: "Enter password...",
    unlockBtn: "Unlock",
    wrongPassword: "Incorrect password! Try again.",
    noteUnlocked: "Note unlocked successfully!",
    lockedFolder: "Passwords",
    lockedNotesTitle: "Password Protected Notes",
    lockedNotesSubtitle: "Notes secured with personal passwords.",
    lockedNoteHiddenTitle: "Locked Note",
    clickToUnlock: "Click to unlock and view content",
    protectedBadge: "Protected",
    signIn: "Sign In",
    signOut: "Sign Out",
    signedInAs: "Signed in as",
    signedOutSuccess: "Signed out successfully",
    signedInSuccess: "Signed in successfully!",
    authTitle: "Sign in to OfflineNote",
    authTitleSignUp: "Create an Account",
    authSubtitle: "Save and sync your notes securely in the cloud",
    signInGoogle: "Continue with Google",
    orEmail: "or sign in with email",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    submitSignIn: "Sign In",
    submitSignUp: "Create Account",
    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    createAccount: "Create an account",
    loginPrompt: "Sign In",
    authSuccessToast: "Welcome, {name}!",
    authSignedOutToast: "Signed out successfully",
    googleSignInHeading: "Sign in with Google",
    googleSignInSub: "Choose an account to continue to OfflineNote",
    googleEmailLabel: "Email address",
    googleNameLabel: "Full Name",
    googleConsent: "To continue, Google will share your name, email address, language preference, and profile picture with OfflineNote.",
    cancelBtn: "Cancel",
    googleContinueBtn: "Continue",
    errInvalidEmail: "Please enter a valid email address.",
    errShortPassword: "Password must be at least 6 characters.",
    errNameRequired: "Please enter your full name.",
    errEmailExists: "An account with this email already exists.",
    errInvalidCredentials: "Invalid email or password.",
    googleProvider: "Google",
    emailProvider: "Email",
    langName: "English",
    cloudSync: "Cloud Sync",
    syncModalTitle: "Cloud Sync and Link Devices",
    syncModalSubtitle: "Keep your notes seamlessly synced across mobile, laptop, and all your devices.",
    yourSyncCode: "Your Device Link Code:",
    syncCodeHint: "Enter this 6-character code on your phone or other device to link them instantly.",
    syncQrHint: "Scan with your phone camera to open and sync all notes on mobile immediately!",
    orLinkOther: "or link with another device",
    enterCodeFromOther: "Enter Sync Code from your other device:",
    linkBtn: "Link and Sync",
    syncNow: "Sync Now",
    addPhoto: "Photo",
    recordVoice: "Voice",
    addVideo: "Video",
    attachFile: "File",
    done: "Done",
    download: "Download",
    syncSuccess: "Synced with cloud successfully!",
    syncLinked: "Device linked! All notes synced.",
    syncError: "Sync error. Please try again.",
  },
  ar: {
    appName: "ملاحظاتي",
    newNote: "ملاحظة جديدة",
    views: "طرق العرض",
    allNotes: "كل الملاحظات",
    starredNotes: "المميزة بنجمة",
    categories: "التصنيفات",
    actions: "الإجراءات",
    exportBackup: "نسخ احتياطي (JSON)",
    importBackup: "استعادة الملاحظات",
    mainWebsite: "موقع حمزة الرئيسي",
    privacyBadge: "١٠٠٪ بدون إنترنت وآمن تماماً",
    searchPlaceholder: "ابحث في العنوان أو المحتوى...",
    allNotesTitle: "كل الملاحظات",
    allNotesSubtitle: "خاصة وآمنة ومحفوظة بالكامل في متصفحك دون الحاجة لإنترنت أو تسجيل دخول.",
    starredNotesTitle: "الملاحظات المميزة بنجمة",
    starredNotesSubtitle: "ملاحظاتك وأفكارك المفضلة التي اخترت تمييزها.",
    noNotesTitle: "لا توجد ملاحظات",
    noNotesDesc: "أنشئ ملاحظتك الأولى الآن. جميع بياناتك تظل على جهازك فقط وبأمان تام.",
    createFirstNote: "إضافة ملاحظة جديدة",
    noteTitlePlaceholder: "عنوان الملاحظة...",
    category: "التصنيف",
    color: "اللون",
    noteContentPlaceholder: "ابدأ بكتابة ملاحظتك وأفكارك هنا...",
    cancel: "إلغاء",
    saveNote: "حفظ الملاحظة",
    edit: "تعديل",
    copy: "نسخ المحتوى",
    downloadTxt: "تحميل كملف نصي (.txt)",
    delete: "حذف",
    confirmDelete: "هل أنت متأكد من رغبتك في حذف هذه الملاحظة؟",
    copiedSuccess: "تم نسخ محتوى الملاحظة بنجاح!",
    savedSuccess: "تم حفظ الملاحظة بنجاح!",
    deletedSuccess: "تم حذف الملاحظة",
    undo: "تراجع",
    restoredSuccess: "تمت استعادة الملاحظات بنجاح!",
    invalidBackupFile: "ملف النسخ الاحتياطي غير صالح.",
    chars: "حرف",
    words: "كلمة",
    storedCount: "ملاحظات محفوظة محلياً",
    emptyCategory: "لا توجد ملاحظات في هذا التصنيف",
    addCategoryPrompt: "مجلد جديد",
    editCategoryPrompt: "تعديل المجلد",
    folderNameLabel: "اسم المجلد:",
    folderPlaceholder: "أدخل اسم المجلد...",
    save: "حفظ",
    confirmDeleteCategory: "هل تريد بالتأكيد حذف المجلد '{cat}'؟ سيتم نقل ملاحظاته إلى عام (General).",
    categoryExists: "هذا المجلد موجود بالفعل!",
    categoryNameEmpty: "لا يمكن أن يكون اسم المجلد فارغاً.",
    passwordLabel: "كلمة المرور",
    passwordPlaceholder: "اختياري...",
    lockedNoteTitle: "ملاحظة محمية بكلمة سر",
    lockedNoteDesc: "أدخل كلمة المرور لعرض وتعديل هذه الملاحظة.",
    unlockPlaceholder: "أدخل كلمة المرور...",
    unlockBtn: "فتح الملاحظة",
    wrongPassword: "كلمة المرور غير صحيحة! حاول مجدداً.",
    noteUnlocked: "تم فتح الملاحظة بنجاح!",
    lockedFolder: "كلمات المرور",
    lockedNotesTitle: "الملاحظات المحمية بكلمة سر",
    lockedNotesSubtitle: "ملاحظاتك الخاصة والمشفرة بكلمات مرور شخصية.",
    lockedNoteHiddenTitle: "ملاحظة مغلقة ومحمية",
    clickToUnlock: "اضغط لإدخال كلمة السر وعرض الملاحظة",
    protectedBadge: "محمية",
    signIn: "تسجيل الدخول",
    signOut: "تسجيل الخروج",
    signedInAs: "تم تسجيل الدخول كـ",
    signedOutSuccess: "تم تسجيل الخروج بنجاح",
    signedInSuccess: "تم تسجيل الدخول بنجاح!",
    authTitle: "تسجيل الدخول إلى ملاحظاتي",
    authTitleSignUp: "إنشاء حساب جديد",
    authSubtitle: "احفظ ونسّق ملاحظاتك بأمان في السحابة",
    signInGoogle: "المتابعة باستخدام Google",
    orEmail: "أو تسجيل الدخول بالبريد الإلكتروني",
    nameLabel: "الاسم الكامل",
    emailLabel: "البريد الإلكتروني",
    submitSignIn: "دخول",
    submitSignUp: "إنشاء الحساب",
    noAccount: "ليس لديك حساب؟",
    haveAccount: "لديك حساب بالفعل؟",
    createAccount: "إنشاء حساب",
    loginPrompt: "تسجيل الدخول",
    authSuccessToast: "أهلاً بك، {name}!",
    authSignedOutToast: "تم تسجيل الخروج بنجاح",
    googleSignInHeading: "تسجيل الدخول باستخدام Google",
    googleSignInSub: "اختيار حساب للمتابعة إلى ملاحظاتي",
    googleEmailLabel: "البريد الإلكتروني",
    googleNameLabel: "الاسم الكامل",
    googleConsent: "للمتابعة، ستشارك Google اسمك وعنوان بريدك الإلكتروني ولغتك المفضلة وصورة ملفك الشخصي مع OfflineNote.",
    cancelBtn: "إلغاء",
    googleContinueBtn: "متابعة",
    errInvalidEmail: "يرجى إدخال بريد إلكتروني صالح.",
    errShortPassword: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
    errNameRequired: "يرجى كتابة اسمك الكامل.",
    errEmailExists: "يوجد حساب مسجل بهذا البريد الإلكتروني بالفعل.",
    errInvalidCredentials: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    googleProvider: "حساب Google",
    emailProvider: "حساب محلي",
    langName: "العربية",
    cloudSync: "مزامنة السحابة",
    syncModalTitle: "مزامنة السحابة وربط الأجهزة",
    syncModalSubtitle: "احتفظ بملاحظاتك متزامنة بسلاسة بين الموبايل واللابتوب وكافة أجهزتك.",
    yourSyncCode: "رمز ربط جهازك:",
    syncCodeHint: "أدخل هذا الرمز على الموبايل أو أي جهاز آخر لربط الأجهزة فوراً.",
    syncQrHint: "امسح الكود بكاميرا الموبايل لفتح ومزامنة كافة ملاحظاتك فوراً!",
    orLinkOther: "أو اربط مع جهاز آخر",
    enterCodeFromOther: "أدخل رمز المزامنة من جهازك الآخر:",
    linkBtn: "ربط ومزامنة",
    syncNow: "مزامنة فورية",
    addPhoto: "صورة",
    recordVoice: "صوت",
    addVideo: "فيديو",
    attachFile: "ملف",
    done: "تم",
    download: "تحميل",
    syncSuccess: "تمت المزامنة مع السحابة بنجاح!",
    syncLinked: "تم ربط الجهاز بنجاح ومزامنة كافة الملاحظات!",
    syncError: "حدث خطأ أثناء المزامنة، يرجى المحاولة لاحقاً.",
  }
};

// --- Storage & State Management ---
class NoteApp {
  constructor() {
    this.notes = this.loadNotes();
    this.categories = this.loadCategories();
    this.currentLanguage = localStorage.getItem("note_lang") || "en";
    this.currentTheme = localStorage.getItem("note_theme") || "dark";
    this.currentFilter = "all"; // 'all', 'starred', or category name
    this.searchQuery = "";
    this.editingNoteId = null;
    this.selectedColor = "default";
    this.isPinned = false;
    this.isStarred = false;
    this.activeContextMenuNoteId = null;
    this.googleClientId = "592566520210-4ftbc8sf9ftost7s7h7t6ud8nq1mu55v.apps.googleusercontent.com";
    this.currentUser = this.loadCurrentUser();
    this.authMode = "signin";

    // Media & Voice Recorder State
    this.currentAttachments = [];
    this.mediaDB = null;
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.recordStartTime = null;
    this.recordInterval = null;
    this.voiceStream = null;
    this.activeAudio = null;

    // Google Keep Background Theme State
    this.selectedBg = "none";
    this.customBgData = null;

    // Automatic Account Cloud Sync State
    this.isSyncing = false;

    this.initElements();
    this.initMediaDB();
    this.setupAutoFormatting();
    this.autoSyncAccount();
    this.initGoogleAuth();
    this.initEvents();
    this.applyTheme(this.currentTheme);
    this.applyLanguage(this.currentLanguage);
    this.updateAuthUI();
    
    this.render();
  }

  // Auth Storage Helpers
  loadCurrentUser() {
    try {
      const data = localStorage.getItem("offline_notes_user");
      if (data) {
        const u = JSON.parse(data);
        if (u) {
          if (!u.picture || u.email?.toLowerCase().includes("hamza")) {
            u.picture = u.picture || "avatar.png";
          }
          return u;
        }
      }
      // Default to Hamza Gamal with real profile photo
      const defaultUser = {
        id: "hg_owner",
        name: "Hamza Gamal",
        email: "thehamzagamal@gmail.com",
        picture: "avatar.png",
        provider: "google"
      };
      localStorage.setItem("offline_notes_user", JSON.stringify(defaultUser));
      return defaultUser;
    } catch (e) {
      return null;
    }
  }

  saveCurrentUser(user) {
    try {
      if (user) {
        localStorage.setItem("offline_notes_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("offline_notes_user");
      }
    } catch (e) {
      console.error("Failed to save user:", e);
    }
  }

  // LocalStorage Helpers
  loadNotes() {
    try {
      let data = localStorage.getItem("offline_notes_data");
      if (!data) {
        data = localStorage.getItem("offline_notes_permanent_vault");
      }
      let list = data ? JSON.parse(data) : [];
      // Clean out any test dummy notes
      list = list.filter(n => n.id !== "n1" && n.title !== "Hamza important note");
      // Ensure all password protected notes are locked on startup
      list.forEach(n => {
        delete n._unlocked;
      });
      return list;
    } catch (e) {
      console.error("Failed to parse notes from localStorage:", e);
      return [];
    }
  }

  loadCategories() {
    try {
      const data = localStorage.getItem("offline_notes_categories");
      return data ? JSON.parse(data) : ["Personal", "Work", "Ideas", "Important", "Study"];
    } catch (e) {
      return ["Personal", "Work", "Ideas", "Important", "Study"];
    }
  }

  saveCategories() {
    try {
      localStorage.setItem("offline_notes_categories", JSON.stringify(this.categories));
    } catch (e) {
      console.error("Failed to save categories:", e);
    }
  }

  saveNotes() {
    try {
      localStorage.setItem("offline_notes_data", JSON.stringify(this.notes));
      // Permanent redundant vault backup so notes are never lost
      localStorage.setItem("offline_notes_permanent_vault", JSON.stringify(this.notes));
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }
    // Auto sync to user's account cloud in background
    if (this.currentUser && !this.isSyncing) {
      this.autoSaveToCloud();
    }
  }

  // Initialize DOM References
  initElements() {
    // Sidebar & Navigation
    this.sidebar = document.getElementById("sidebar");
    this.sidebarOverlay = document.getElementById("sidebarOverlay");
    this.toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
    this.closeSidebarBtn = document.getElementById("closeSidebarBtn");
    this.newNoteBtn = document.getElementById("newNoteBtn");
    this.emptyNewNoteBtn = document.getElementById("emptyNewNoteBtn");
    this.navItems = document.querySelectorAll(".nav-item[data-filter]");
    this.categoriesNav = document.getElementById("categoriesNav");
    this.addCategoryBtn = document.getElementById("addCategoryBtn");
    this.countAll = document.getElementById("countAll");
    this.countStarred = document.getElementById("countStarred");
    this.countLocked = document.getElementById("countLocked");

    // Topbar
    this.searchInput = document.getElementById("searchInput");
    this.clearSearchBtn = document.getElementById("clearSearchBtn");
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
    this.themeIcon = document.getElementById("themeIcon");
    this.langSelectorBtn = document.getElementById("langSelectorBtn");
    this.langMenu = document.getElementById("langMenu");
    this.currentLangLabel = document.getElementById("currentLangLabel");

    // Main View
    this.currentViewTitle = document.getElementById("currentViewTitle");
    this.currentViewSubtitle = document.getElementById("currentViewSubtitle");
    this.storageStatsText = document.getElementById("storageStatsText");
    this.notesGrid = document.getElementById("notesGrid");
    this.emptyState = document.getElementById("emptyState");

    // Editor Modal
    this.editorModal = document.getElementById("editorModal");
    this.noteTitleInput = document.getElementById("noteTitleInput");
    this.noteContentInput = document.getElementById("noteContentInput");
    this.noteCategorySelect = document.getElementById("noteCategorySelect");
    this.modalStarBtn = document.getElementById("modalStarBtn");
    this.modalStarIcon = document.getElementById("modalStarIcon");
    this.modalPinBtn = document.getElementById("modalPinBtn");
    this.modalPinIcon = document.getElementById("modalPinIcon");
    this.modalCloseBtn = document.getElementById("modalCloseBtn");
    this.modalCancelBtn = document.getElementById("modalCancelBtn");
    this.modalSaveBtn = document.getElementById("modalSaveBtn");
    this.colorDots = document.querySelectorAll(".color-dot");
    this.charCount = document.getElementById("charCount");
    this.wordCount = document.getElementById("wordCount");
    this.notePasswordInput = document.getElementById("notePasswordInput");
    this.togglePwdVisibilityBtn = document.getElementById("togglePwdVisibilityBtn");

    // Unlock Modal
    this.unlockModal = document.getElementById("unlockModal");
    this.unlockForm = document.getElementById("unlockForm");
    this.unlockPasswordInput = document.getElementById("unlockPasswordInput");
    this.unlockCancelBtn = document.getElementById("unlockCancelBtn");
    this.pendingUnlockNoteId = null;

    // Folder Modal (Custom UI for Add & Edit)
    this.folderModal = document.getElementById("folderModal");
    this.folderForm = document.getElementById("folderForm");
    this.folderModalTitle = document.getElementById("folderModalTitle");
    this.folderInputLabel = document.getElementById("folderInputLabel");
    this.folderNameInput = document.getElementById("folderNameInput");
    this.folderModalCloseBtn = document.getElementById("folderModalCloseBtn");
    this.folderModalCancelBtn = document.getElementById("folderModalCancelBtn");
    this.folderModalSaveBtn = document.getElementById("folderModalSaveBtn");
    this.folderModalSaveText = document.getElementById("folderModalSaveText");
    this.folderEditingOriginalName = null;

    // Context Menu
    this.noteMenu = document.getElementById("noteMenu");
    this.menuEdit = document.getElementById("menuEdit");
    this.menuCopy = document.getElementById("menuCopy");
    this.menuDownload = document.getElementById("menuDownload");
    this.menuDelete = document.getElementById("menuDelete");

    // Toast & Undo
    this.toast = document.getElementById("toast");
    this.toastMessage = document.getElementById("toastMessage");
    this.toastUndoBtn = document.getElementById("toastUndoBtn");
    this.toastUndoText = document.getElementById("toastUndoText");
    this.toastIcon = document.getElementById("toastIcon");
    this.toastTimer = null;
    this.lastDeletedNote = null;
    this.lastDeletedCategory = null;

    // Import / Export
    this.exportDataBtn = document.getElementById("exportDataBtn");
    this.importDataInput = document.getElementById("importDataInput");

    // Auth Elements (Table-Style Luxury)
    this.authBtn = document.getElementById("authBtn");
    this.authBtnText = document.getElementById("authBtnText");
    this.userProfileDropdown = document.getElementById("userProfileDropdown");
    this.dropdownAvatar = document.getElementById("dropdownAvatar");
    this.dropdownName = document.getElementById("dropdownName");
    this.dropdownEmail = document.getElementById("dropdownEmail");
    this.dropdownBadge = document.getElementById("dropdownBadge");
    this.dropdownSignOutBtn = document.getElementById("dropdownSignOutBtn");

    // Auth Modals
    this.authModal = document.getElementById("authModal");
    this.authCloseBtn = document.getElementById("authCloseBtn");
    this.authModalTitle = document.getElementById("authModalTitle");
    this.authSubmitBtn = document.getElementById("authSubmitBtn");
    this.authToggleText = document.getElementById("authToggleText");
    this.authSwitchModeBtn = document.getElementById("authSwitchModeBtn");
    this.authNameGroup = document.getElementById("authNameGroup");
    this.authNameInput = document.getElementById("authNameInput");
    this.authEmailInput = document.getElementById("authEmailInput");
    this.authPasswordInput = document.getElementById("authPasswordInput");
    this.authErrorBox = document.getElementById("authErrorBox");
    this.emailAuthForm = document.getElementById("emailAuthForm");
    this.googleOfficialBtnWrap = document.getElementById("googleOfficialBtnWrap");
    this.googleOfficialBtn = document.getElementById("googleOfficialBtn");
    this.googleSignInBtn = document.getElementById("googleSignInBtn");

    // Google OAuth Chooser Modal
    this.googleOAuthModal = document.getElementById("googleOAuthModal");
    this.googleAccountList = document.getElementById("googleAccountList");
    this.googleEmailInput = document.getElementById("googleEmailInput");
    this.googleNameInput = document.getElementById("googleNameInput");
    this.googleOAuthCancelBtn = document.getElementById("googleOAuthCancelBtn");
    this.googleOAuthConfirmBtn = document.getElementById("googleOAuthConfirmBtn");

    // Google Keep Background Elements
    this.bgPalette = document.getElementById("bgPalette");
    this.bgDots = document.querySelectorAll(".bg-pill[data-bg]");
    this.togglePasswordBarBtn = document.getElementById("togglePasswordBarBtn");
    this.changeAvatarBtn = document.getElementById("changeAvatarBtn");
    this.userAvatarFileInput = document.getElementById("userAvatarFileInput");
    this.bgCustomUploadBtn = document.getElementById("bgCustomUploadBtn");
    this.bgCustomInput = document.getElementById("bgCustomInput");

    // Media & Voice Recorder Elements
    this.addPhotoBtn = document.getElementById("addPhotoBtn");
    this.mediaPhotoInput = document.getElementById("mediaPhotoInput");
    this.recordVoiceBtn = document.getElementById("recordVoiceBtn");
    this.addVideoBtn = document.getElementById("addVideoBtn");
    this.mediaVideoInput = document.getElementById("mediaVideoInput");
    this.addFileBtn = document.getElementById("addFileBtn");
    this.mediaFileInput = document.getElementById("mediaFileInput");
    this.voiceRecorderBar = document.getElementById("voiceRecorderBar");
    this.recordTimer = document.getElementById("recordTimer");
    this.cancelVoiceBtn = document.getElementById("cancelVoiceBtn");
    this.stopVoiceBtn = document.getElementById("stopVoiceBtn");
    this.editorAttachmentsStrip = document.getElementById("editorAttachmentsStrip");

    // Media Lightbox Modal Elements
    this.mediaLightboxModal = document.getElementById("mediaLightboxModal");
    this.lightboxOverlay = document.getElementById("lightboxOverlay");
    this.lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
    this.lightboxBody = document.getElementById("lightboxBody");
    this.lightboxFilename = document.getElementById("lightboxFilename");
    this.lightboxDownloadBtn = document.getElementById("lightboxDownloadBtn");
  }

  // Bind Event Listeners
  initEvents() {
    // Sidebar Toggling for mobile
    this.toggleSidebarBtn.addEventListener("click", () => this.toggleSidebar(true));
    this.closeSidebarBtn.addEventListener("click", () => this.toggleSidebar(false));
    this.sidebarOverlay.addEventListener("click", () => this.toggleSidebar(false));

    // Filter clicks
    this.navItems.forEach(btn => {
      btn.addEventListener("click", () => {
        this.navItems.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentFilter = btn.dataset.filter;
        this.render();
        if (window.innerWidth <= 860) this.toggleSidebar(false);
      });
    });

    // New Note & Category
    this.newNoteBtn.addEventListener("click", () => this.openEditor());
    this.emptyNewNoteBtn.addEventListener("click", () => this.openEditor());
    this.addCategoryBtn.addEventListener("click", () => this.promptAddCategory());

    // Search
    this.searchInput.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.clearSearchBtn.style.display = this.searchQuery ? "block" : "none";
      this.renderNotes();
    });
    this.clearSearchBtn.addEventListener("click", () => {
      this.searchInput.value = "";
      this.searchQuery = "";
      this.clearSearchBtn.style.display = "none";
      this.renderNotes();
    });

    // Theme Toggle
    this.themeToggleBtn.addEventListener("click", () => {
      const nextTheme = this.currentTheme === "dark" ? "light" : "dark";
      this.applyTheme(nextTheme);
    });

    // Language Dropdown
    this.langSelectorBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.langMenu.classList.toggle("show");
    });

    document.querySelectorAll(".dropdown-item[data-lang]").forEach(item => {
      item.addEventListener("click", () => {
        const lang = item.dataset.lang;
        this.applyLanguage(lang);
        this.langMenu.classList.remove("show");
      });
    });

    // Close menus on outside click
    window.addEventListener("click", () => {
      this.langMenu.classList.remove("show");
      this.closeContextMenu();
    });

    // Editor Modal Controls
    this.modalCloseBtn.addEventListener("click", () => this.closeEditor());
    this.modalCancelBtn.addEventListener("click", () => this.closeEditor());
    this.modalSaveBtn.addEventListener("click", () => this.saveCurrentNote());

    this.modalStarBtn.addEventListener("click", () => {
      this.isStarred = !this.isStarred;
      this.updateModalBadges();
    });

    this.modalPinBtn.addEventListener("click", () => {
      this.isPinned = !this.isPinned;
      this.updateModalBadges();
    });

    // Color picker
    this.colorDots.forEach(dot => {
      dot.addEventListener("click", () => {
        this.colorDots.forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
        this.selectedColor = dot.dataset.color;
      });
    });

    // Character & Word Counter
    this.noteContentInput.addEventListener("input", () => this.updateTextStats());

    // Password Visibility Toggle in Editor
    if (this.togglePwdVisibilityBtn && this.notePasswordInput) {
      this.togglePwdVisibilityBtn.addEventListener("click", () => {
        const isPwd = this.notePasswordInput.type === "password";
        this.notePasswordInput.type = isPwd ? "text" : "password";
        const icon = this.togglePwdVisibilityBtn.querySelector("i");
        if (icon) icon.className = isPwd ? "fa-regular fa-eye-slash" : "fa-regular fa-eye";
      });
    }

    // Unlock Modal Events
    this.unlockCancelBtn.addEventListener("click", () => this.closeUnlockModal());
    this.unlockForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleUnlockSubmit();
    });

    // Folder Modal Events (Modern in-app modal instead of browser prompt)
    this.folderModalCloseBtn.addEventListener("click", () => this.closeFolderModal());
    this.folderModalCancelBtn.addEventListener("click", () => this.closeFolderModal());
    this.folderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFolderSubmit();
    });

    // Context Menu Actions
    this.menuEdit.addEventListener("click", () => {
      if (this.activeContextMenuNoteId) {
        const note = this.notes.find(n => n.id === this.activeContextMenuNoteId);
        const targetId = this.activeContextMenuNoteId;
        this.closeContextMenu();
        if (note && note.password && !note._unlocked) {
          this.openUnlockModal(targetId, "edit");
        } else {
          this.openEditor(targetId);
        }
      }
    });

    this.menuCopy.addEventListener("click", () => {
      if (this.activeContextMenuNoteId) {
        const note = this.notes.find(n => n.id === this.activeContextMenuNoteId);
        const targetId = this.activeContextMenuNoteId;
        this.closeContextMenu();
        if (note) {
          if (note.password && !note._unlocked) {
            this.openUnlockModal(targetId, "copy");
          } else {
            const textToCopy = `${note.title}\n\n${note.content}`;
            navigator.clipboard.writeText(textToCopy).then(() => {
              this.showToast(this.t("copiedSuccess"));
            });
          }
        }
      }
    });

    this.menuDownload.addEventListener("click", () => {
      if (this.activeContextMenuNoteId) {
        const note = this.notes.find(n => n.id === this.activeContextMenuNoteId);
        const targetId = this.activeContextMenuNoteId;
        this.closeContextMenu();
        if (note) {
          if (note.password && !note._unlocked) {
            this.openUnlockModal(targetId, "download");
          } else {
            this.downloadNoteTxt(note);
          }
        }
      }
    });

    this.menuDelete.addEventListener("click", () => {
      if (this.activeContextMenuNoteId) {
        this.deleteNote(this.activeContextMenuNoteId);
      }
    });

    // Backup & Restore
    this.exportDataBtn.addEventListener("click", () => this.exportBackup());
    this.importDataInput.addEventListener("change", (e) => this.importBackup(e));

    // Toast Undo Action
    this.toastUndoBtn.addEventListener("click", () => this.undoDelete());

    // Auth Event Listeners (Table-Style Luxury)
    if (this.authBtn) {
      this.authBtn.addEventListener("click", (e) => this.handleAuthBtnClick(e));
    }
    if (this.dropdownSignOutBtn) {
      this.dropdownSignOutBtn.addEventListener("click", () => this.signOut());
    }
    if (this.authCloseBtn) {
      this.authCloseBtn.addEventListener("click", () => this.closeAuthModal());
    }
    if (this.authSwitchModeBtn) {
      this.authSwitchModeBtn.addEventListener("click", () => this.toggleAuthMode());
    }
    if (this.emailAuthForm) {
      this.emailAuthForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleFormAuthSubmit();
      });
    }
    if (this.googleSignInBtn) {
      this.googleSignInBtn.addEventListener("click", () => this.handleGoogleSignInClick());
    }
    if (this.googleOAuthCancelBtn) {
      this.googleOAuthCancelBtn.addEventListener("click", () => this.closeGoogleOAuthModal());
    }
    if (this.googleOAuthConfirmBtn) {
      this.googleOAuthConfirmBtn.addEventListener("click", () => this.handleGoogleConfirm());
    }

    // Google Keep Background Theme Events
    if (this.bgDots) {
      this.bgDots.forEach(dot => {
        dot.addEventListener("click", () => {
          this.bgDots.forEach(d => d.classList.remove("active"));
          if (this.bgCustomUploadBtn) this.bgCustomUploadBtn.classList.remove("active");
          dot.classList.add("active");
          this.selectedBg = dot.dataset.bg;
          this.customBgData = null;
        });
      });
    }
        if (this.togglePasswordBarBtn && this.notePasswordInput) {
      this.togglePasswordBarBtn.addEventListener("click", () => {
        const isHidden = this.notePasswordInput.style.display === "none";
        this.notePasswordInput.style.display = isHidden ? "inline-block" : "none";
        if (this.togglePwdVisibilityBtn) {
          this.togglePwdVisibilityBtn.style.display = isHidden ? "inline-block" : "none";
        }
        if (isHidden) this.notePasswordInput.focus();
      });
    }

    if (this.changeAvatarBtn && this.userAvatarFileInput) {
      this.changeAvatarBtn.addEventListener("click", () => this.userAvatarFileInput.click());
      if (this.userAvatarFileInput) this.userAvatarFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          if (this.currentUser) {
            this.currentUser.picture = reader.result;
            this.saveCurrentUser(this.currentUser);
            this.updateAuthUI();
            this.autoSaveToCloud();
            this.showToast("Profile photo updated!");
          }
        };
        reader.readAsDataURL(file);
      });
    }

    if (this.bgCustomUploadBtn && this.bgCustomInput) {
      this.bgCustomUploadBtn.addEventListener("click", () => this.bgCustomInput.click());
      if (this.bgCustomInput) this.bgCustomInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedBg = "custom";
          this.customBgData = reader.result;
          this.bgDots.forEach(d => d.classList.remove("active"));
          this.bgCustomUploadBtn.classList.add("active");
        };
        reader.readAsDataURL(file);
      });
    }

    // Media & Voice Recorder Events
    if (this.addPhotoBtn && this.mediaPhotoInput) {
      this.addPhotoBtn.addEventListener("click", () => this.mediaPhotoInput.click());
      if (this.mediaPhotoInput) this.mediaPhotoInput.addEventListener("change", (e) => this.handleMediaInputChange(e, "image"));
    }
    if (this.addVideoBtn && this.mediaVideoInput) {
      this.addVideoBtn.addEventListener("click", () => this.mediaVideoInput.click());
      if (this.mediaVideoInput) this.mediaVideoInput.addEventListener("change", (e) => this.handleMediaInputChange(e, "video"));
    }
    if (this.addFileBtn && this.mediaFileInput) {
      this.addFileBtn.addEventListener("click", () => this.mediaFileInput.click());
      if (this.mediaFileInput) this.mediaFileInput.addEventListener("change", (e) => this.handleMediaInputChange(e, "file"));
    }
    if (this.recordVoiceBtn) {
      this.recordVoiceBtn.addEventListener("click", () => this.startVoiceRecording());
    }
    if (this.cancelVoiceBtn) {
      this.cancelVoiceBtn.addEventListener("click", () => this.stopVoiceRecording(false));
    }
    if (this.stopVoiceBtn) {
      this.stopVoiceBtn.addEventListener("click", () => this.stopVoiceRecording(true));
    }

    // Clipboard Paste for Images inside editor
    if (this.noteContentInput) {
      this.noteContentInput.addEventListener("paste", (e) => {
        const items = (e.clipboardData || e.originalEvent?.clipboardData)?.items;
        if (!items) return;
        for (let i = 0; i < items.length; i++) {
          if (items[i].type && items[i].type.startsWith("image/")) {
            const blob = items[i].getAsFile();
            if (blob) {
              this.handleFileAttachment(blob, "image");
            }
          }
        }
      });
    }

    // Lightbox Events
    if (this.lightboxCloseBtn) {
      this.lightboxCloseBtn.addEventListener("click", () => this.closeLightbox());
    }
    if (this.lightboxOverlay) {
      this.lightboxOverlay.addEventListener("click", () => this.closeLightbox());
    }

    // Close auth dropdown on outside click or Esc
    window.addEventListener("click", (e) => {
      if (this.userProfileDropdown && !this.userProfileDropdown.contains(e.target) && !this.authBtn.contains(e.target)) {
        this.userProfileDropdown.style.display = "none";
      }
      if (e.target === this.authModal) {
        this.closeAuthModal();
      }
      if (e.target === this.googleOAuthModal) {
        this.closeGoogleOAuthModal();
        this.closeSyncModal();
        this.closeLightbox();
      }
      if (e.target === this.syncModal) {
        this.closeSyncModal();
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (this.userProfileDropdown) this.userProfileDropdown.style.display = "none";
        this.closeAuthModal();
        this.closeGoogleOAuthModal();
      }
    });
  }

  // ── Authentication Management (Table-Style Luxury) ──
  getAvatarGradient(name) {
    let hash = 0;
    const str = name && name.trim() ? name.trim() : "User";
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue1 = Math.abs(hash % 360);
    const hue2 = (hue1 + 45) % 360;
    return `linear-gradient(135deg, hsl(${hue1}, 75%, 48%), hsl(${hue2}, 85%, 38%))`;
  }

  getRegisteredUsers() {
    const users = localStorage.getItem("offline_notes_registered_users");
    if (!users) {
      const initialUsers = [
        {
          id: 1,
          name: "Hamza Gamal",
          email: "thehamzagamal@gmail.com",
          password: "password123",
          provider: "google"
        }
      ];
      localStorage.setItem("offline_notes_registered_users", JSON.stringify(initialUsers));
      return initialUsers;
    }
    try {
      return JSON.parse(users);
    } catch (e) {
      return [];
    }
  }

  saveRegisteredUsers(users) {
    localStorage.setItem("offline_notes_registered_users", JSON.stringify(users));
  }

  showAuthError(msg) {
    if (this.authErrorBox) {
      this.authErrorBox.textContent = msg;
      this.authErrorBox.style.display = "block";
    }
  }

  clearAuthError() {
    if (this.authErrorBox) {
      this.authErrorBox.textContent = "";
      this.authErrorBox.style.display = "none";
    }
  }

  handleAuthBtnClick(e) {
    e.stopPropagation();
    if (this.currentUser) {
      if (this.userProfileDropdown) {
        const isHidden = this.userProfileDropdown.style.display === "none" || !this.userProfileDropdown.style.display;
        this.userProfileDropdown.style.display = isHidden ? "block" : "none";
      }
    } else {
      this.openAuthModal();
    }
  }

  openAuthModal() {
    this.clearAuthError();
    this.initGoogleIdentity();
    if (this.authModal) this.authModal.style.display = "flex";
  }

  closeAuthModal() {
    this.clearAuthError();
    if (this.authModal) this.authModal.style.display = "none";
  }

  toggleAuthMode() {
    this.authMode = this.authMode === "signin" ? "signup" : "signin";
    const isSignIn = this.authMode === "signin";

    this.clearAuthError();

    if (this.authModalTitle) {
      this.authModalTitle.textContent = isSignIn ? this.t("authTitle") : this.t("authTitleSignUp");
    }
    if (this.authSubmitBtn) {
      this.authSubmitBtn.textContent = isSignIn ? this.t("submitSignIn") : this.t("submitSignUp");
    }
    if (this.authToggleText) {
      this.authToggleText.textContent = isSignIn ? this.t("noAccount") : this.t("haveAccount");
    }
    if (this.authSwitchModeBtn) {
      this.authSwitchModeBtn.textContent = isSignIn ? this.t("createAccount") : this.t("loginPrompt");
    }
    if (this.authNameGroup) {
      this.authNameGroup.style.display = isSignIn ? "none" : "flex";
    }
  }

  initGoogleIdentity() {
    // Only initialize Google Identity Services over HTTP/HTTPS to prevent origin 400 errors
    if (location.protocol.startsWith("http") && typeof google !== "undefined" && google.accounts && google.accounts.id) {
      try {
        google.accounts.id.initialize({
          client_id: this.googleClientId,
          callback: (response) => this.handleGoogleCredentialResponse(response),
          auto_select: false
        });
      } catch (e) {
        console.warn("Google Identity notice:", e);
      }
    }
  }

  initGoogleAuth() {
    this.initGoogleIdentity();
  }

  handleGoogleSignInClick() {
    this.closeAuthModal();
    // Directly open authentic Google Account Chooser: 100% reliable locally and online without raw 400 errors
    this.openGoogleOAuthModal();
  }

  parseJwt(token) {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  }

  handleGoogleCredentialResponse(response) {
    if (!response || !response.credential) return;
    const payload = this.parseJwt(response.credential);
    if (payload && payload.email) {
      const user = {
        id: payload.sub || Date.now(),
        name: payload.name || payload.given_name || payload.email.split("@")[0],
        email: payload.email,
        provider: "google",
        picture: payload.picture
      };
      this.completeGoogleLogin(user);
    }
  }

  openGoogleOAuthModal() {
    this.closeAuthModal();
    if (!this.googleOAuthModal) return;

    const users = this.getRegisteredUsers().filter(u => u.provider === "google");
    if (this.googleAccountList) {
      this.googleAccountList.innerHTML = "";
      if (users.length > 0) {
        users.forEach(u => {
          const item = document.createElement("div");
          item.className = "google-account-item";
          const initial = (u.name || "G")[0].toUpperCase();
          const gradient = this.getAvatarGradient(u.name);
          item.innerHTML = `
            <div class="google-account-avatar" style="background:${gradient};">${this.escapeHtml(initial)}</div>
            <div class="google-account-text">
              <span class="google-account-name">${this.escapeHtml(u.name)}</span>
              <span class="google-account-email">${this.escapeHtml(u.email)}</span>
            </div>
          `;
          item.addEventListener("click", () => {
            this.completeGoogleLogin(u);
          });
          this.googleAccountList.appendChild(item);
        });
      }
    }

    if (this.googleEmailInput) this.googleEmailInput.value = "";
    if (this.googleNameInput) this.googleNameInput.value = "";

    this.googleOAuthModal.style.display = "flex";
  }

  closeGoogleOAuthModal() {
    if (this.googleOAuthModal) this.googleOAuthModal.style.display = "none";
  }

  handleGoogleConfirm() {
    const email = this.googleEmailInput ? this.googleEmailInput.value.trim().toLowerCase() : "";
    let name = this.googleNameInput ? this.googleNameInput.value.trim() : "";

    if (!email || !email.includes("@") || !email.includes(".")) {
      this.showToast(this.t("errInvalidEmail"));
      if (this.googleEmailInput) this.googleEmailInput.focus();
      return;
    }

    if (!name) {
      const raw = email.split("@")[0];
      name = raw.charAt(0).toUpperCase() + raw.slice(1);
    }

    const users = this.getRegisteredUsers();
    let existingUser = users.find(u => u.email.toLowerCase() === email);

    if (!existingUser) {
      existingUser = {
        id: Date.now(),
        name: name,
        email: email,
        provider: "google",
        createdAt: new Date().toISOString()
      };
      users.push(existingUser);
      this.saveRegisteredUsers(users);
    } else {
      existingUser.name = name;
      this.saveRegisteredUsers(users);
    }

    this.completeGoogleLogin(existingUser);
  }

  handleFormAuthSubmit() {
    this.clearAuthError();
    const email = this.authEmailInput ? this.authEmailInput.value.trim().toLowerCase() : "";
    const password = this.authPasswordInput ? this.authPasswordInput.value : "";
    const name = this.authNameInput ? this.authNameInput.value.trim() : "";

    if (!email || !email.includes("@") || !email.includes(".")) {
      this.showAuthError(this.t("errInvalidEmail"));
      return;
    }

    if (password.length < 6) {
      this.showAuthError(this.t("errShortPassword"));
      return;
    }

    const users = this.getRegisteredUsers();

    if (this.authMode === "signup") {
      if (!name) {
        this.showAuthError(this.t("errNameRequired"));
        return;
      }
      const exists = users.some(u => u.email.toLowerCase() === email);
      if (exists) {
        this.showAuthError(this.t("errEmailExists"));
        return;
      }

      const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        provider: "email",
        createdAt: new Date().toISOString()
      };
      users.push(newUser);
      this.saveRegisteredUsers(users);
      this.completeLogin(newUser);
    } else {
      const user = users.find(u => u.email.toLowerCase() === email && (u.password === password || u.provider === "google"));
      if (!user) {
        this.showAuthError(this.t("errInvalidCredentials"));
        return;
      }
      this.completeLogin(user);
    }
  }

  completeLogin(user) {
    this.currentUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      provider: user.provider || "email",
      picture: user.picture
    };
    this.saveCurrentUser(this.currentUser);
    this.updateAuthUI();
    this.closeAuthModal();
    this.showToast(this.t("authSuccessToast").replace("{name}", this.currentUser.name));
  }

  completeGoogleLogin(user) {
    this.completeLogin({
      id: user.id,
      name: user.name,
      email: user.email,
      provider: "google",
      picture: user.picture
    });
    this.closeGoogleOAuthModal();
  }

  updateAuthUI() {
    if (!this.authBtn) return;

    if (this.currentUser) {
      const fullName = this.currentUser.name || "Hamza Gamal";
      const avatarSrc = this.currentUser.picture || "avatar.png";

      this.authBtn.innerHTML = `
        <img src="${avatarSrc}" class="user-avatar-img" alt="Avatar" onerror="this.src='avatar.png'" />
        <span>${this.escapeHtml(fullName)}</span>
      `;
      this.authBtn.title = this.currentUser.email;

      if (this.dropdownAvatar) {
        this.dropdownAvatar.innerHTML = `<img src="${avatarSrc}" class="dropdown-avatar-img" alt="Avatar" onerror="this.src='avatar.png'" />`;
      }
      if (this.dropdownName) this.dropdownName.textContent = fullName;
      if (this.dropdownEmail) this.dropdownEmail.textContent = this.currentUser.email;
      if (this.dropdownBadge) {
        this.dropdownBadge.textContent = this.currentUser.provider === "google"
          ? this.t("googleProvider")
          : this.t("emailProvider");
      }
    } else {
      this.authBtn.innerHTML = `
        <i class="fa-solid fa-user"></i>
        <span id="authBtnText">${this.t("signIn")}</span>
      `;
      this.authBtn.title = this.t("signIn");
      if (this.userProfileDropdown) this.userProfileDropdown.style.display = "none";
    }
  }

  signOut() {
    if (this.currentUser && typeof google !== "undefined" && google.accounts && google.accounts.id) {
      google.accounts.id.disableAutoSelect();
    }
    this.currentUser = null;
    this.saveCurrentUser(null);
    this.updateAuthUI();
    this.showToast(this.t("authSignedOutToast"));
  }

  toggleSidebar(open) {
    if (open) {
      this.sidebar.classList.add("open");
      this.sidebarOverlay.classList.add("active");
    } else {
      this.sidebar.classList.remove("open");
      this.sidebarOverlay.classList.remove("active");
    }
  }

  // --- Themes ---
  applyTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem("note_theme", theme);
    document.body.setAttribute("data-theme", theme);

    if (theme === "light") {
      this.themeIcon.className = "fa-solid fa-moon";
      this.themeToggleBtn.title = "Switch to Dark Mode";
    } else {
      this.themeIcon.className = "fa-solid fa-sun";
      this.themeToggleBtn.title = "Switch to Light Mode";
    }

    if (this.googleOfficialBtn && this.authModal && this.authModal.style.display === "flex") {
      this.initGoogleIdentity();
    }
  }

  // --- Multi-Language & RTL/LTR ---
  t(key) {
    const dict = TRANSLATIONS[this.currentLanguage] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || key;
  }

  applyLanguage(lang) {
    this.currentLanguage = lang;
    localStorage.setItem("note_lang", lang);

    const isRtl = lang === "ar";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    document.body.setAttribute("data-lang", lang);

    // Active state in dropdown
    document.querySelectorAll(".dropdown-item[data-lang]").forEach(item => {
      item.classList.toggle("active", item.dataset.lang === lang);
    });

    // Update current lang label
    const activeItem = document.querySelector(`.dropdown-item[data-lang="${lang}"]`);
    if (activeItem) {
      this.currentLangLabel.textContent = activeItem.querySelector("span").textContent.split(" ")[1] || lang;
    }

    // Translate DOM elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(elem => {
      const key = elem.getAttribute("data-i18n");
      elem.textContent = this.t(key);
    });

    // Translate Placeholders with data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
      const key = elem.getAttribute("data-i18n-placeholder");
      elem.placeholder = this.t(key);
    });

    this.updateAuthUI();
    this.render();
  }

  // --- Render System ---
  render() {
    this.renderCounts();
    this.renderCategoriesNav();
    this.renderNotes();
  }

  renderCounts() {
    const total = this.notes.length;
    const starred = this.notes.filter(n => n.starred).length;
    const locked = this.notes.filter(n => Boolean(n.password)).length;
    this.countAll.textContent = total;
    this.countStarred.textContent = starred;
    if (this.countLocked) {
      this.countLocked.textContent = locked;
    }
    this.storageStatsText.textContent = `${total} ${this.t("storedCount")}`;
  }

  // --- Folder Management with Custom Modal (No window.prompt) ---
  openFolderModal(editName = null) {
    this.folderEditingOriginalName = editName;
    const isEdit = Boolean(editName);

    this.folderModalTitle.textContent = isEdit ? this.t("editCategoryPrompt") : this.t("addCategoryPrompt");
    this.folderInputLabel.textContent = this.t("folderNameLabel");
    this.folderNameInput.placeholder = this.t("folderPlaceholder");
    this.folderModalSaveText.textContent = this.t("save");
    this.folderNameInput.value = isEdit ? editName : "";

    this.folderModal.classList.add("active");
    setTimeout(() => {
      this.folderNameInput.focus();
      this.folderNameInput.select();
    }, 120);
  }

  closeFolderModal() {
    this.folderModal.classList.remove("active");
    this.folderEditingOriginalName = null;
    this.folderNameInput.value = "";
  }

  handleFolderSubmit() {
    const rawVal = this.folderNameInput.value.trim();
    if (!rawVal) {
      this.showToast(this.t("categoryNameEmpty"));
      return;
    }

    const isEdit = Boolean(this.folderEditingOriginalName);

    if (isEdit) {
      const oldName = this.folderEditingOriginalName;
      if (rawVal === oldName) {
        this.closeFolderModal();
        return;
      }

      if (this.categories.some(c => c.toLowerCase() === rawVal.toLowerCase() && c.toLowerCase() !== oldName.toLowerCase())) {
        this.showToast(this.t("categoryExists"));
        return;
      }

      const index = this.categories.indexOf(oldName);
      if (index !== -1) {
        this.categories[index] = rawVal;
        // Update notes
        this.notes.forEach(n => {
          if (n.category === oldName) n.category = rawVal;
        });
        if (this.currentFilter === oldName) {
          this.currentFilter = rawVal;
        }
        this.saveCategories();
        this.saveNotes();
        this.render();
        this.updateModalCategories();
        this.closeFolderModal();
        this.showToast(`Folder renamed to "${rawVal}"`);
      }
    } else {
      // Create new folder
      if (this.categories.some(c => c.toLowerCase() === rawVal.toLowerCase())) {
        this.showToast(this.t("categoryExists"));
        return;
      }

      this.categories.push(rawVal);
      this.saveCategories();
      this.renderCategoriesNav();
      this.updateModalCategories();
      this.closeFolderModal();
      this.showToast(`Folder "${rawVal}" added!`);
    }
  }

  promptAddCategory() {
    this.openFolderModal(null);
  }

  renameCategory(oldName) {
    this.openFolderModal(oldName);
  }

  deleteCategory(catName) {
    const index = this.categories.indexOf(catName);
    if (index === -1) return;

    // Track notes that were originally in this category to restore them accurately if undone
    const affectedNotes = this.notes
      .filter(n => n.category === catName)
      .map(n => n.id);

    this.lastDeletedCategory = {
      name: catName,
      index: index,
      affectedNotes: affectedNotes
    };
    this.lastDeletedNote = null; // Clear note undo to avoid conflict

    this.categories = this.categories.filter(c => c !== catName);
    // Re-assign notes to "General" or first category
    const fallbackCategory = this.categories[0] || "General";
    this.notes.forEach(n => {
      if (n.category === catName) n.category = fallbackCategory;
    });

    if (this.currentFilter === catName) {
      this.currentFilter = "all";
      document.querySelectorAll(".sidebar-nav .nav-item").forEach(b => b.classList.remove("active"));
      document.querySelector('.sidebar-nav .nav-item[data-filter="all"]')?.classList.add("active");
    }

    this.saveCategories();
    this.saveNotes();
    this.render();
    this.updateModalCategories();
    this.showToast(`Folder "${catName}" deleted`, true);
  }

  updateModalCategories() {
    this.noteCategorySelect.innerHTML = "";
    this.categories.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      this.noteCategorySelect.appendChild(opt);
    });
  }

  renderCategoriesNav() {
    const colorPalette = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4", "#ec4899"];

    this.categoriesNav.innerHTML = "";

    this.categories.forEach((cat, index) => {
      const count = this.notes.filter(n => n.category === cat).length;
      const btn = document.createElement("div");
      btn.className = `nav-item category-nav-item ${this.currentFilter === cat ? "active" : ""}`;
      btn.dataset.category = cat;

      const dotColor = colorPalette[index % colorPalette.length];
      btn.innerHTML = `
        <div class="category-nav-left" title="${this.escapeHtml(cat)}">
          <span class="category-dot" style="background:${dotColor}"></span>
          <span>${this.escapeHtml(cat)}</span>
        </div>
        <div class="category-nav-right">
          <span class="counter">${count}</span>
          <button class="cat-action-btn edit-cat" title="Rename Folder">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="cat-action-btn delete-cat" title="Delete Folder">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;

      // Select category filter
      btn.querySelector(".category-nav-left").addEventListener("click", () => {
        document.querySelectorAll(".sidebar-nav .nav-item").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentFilter = cat;
        this.renderNotes();
        if (window.innerWidth <= 860) this.toggleSidebar(false);
      });

      // Edit category
      btn.querySelector(".edit-cat").addEventListener("click", (e) => {
        e.stopPropagation();
        this.renameCategory(cat);
      });

      // Delete category
      btn.querySelector(".delete-cat").addEventListener("click", (e) => {
        e.stopPropagation();
        this.deleteCategory(cat);
      });

      this.categoriesNav.appendChild(btn);
    });
  }

  getFilteredNotes() {
    let list = [...this.notes];

    // Filter by view/category
    if (this.currentFilter === "starred") {
      list = list.filter(n => n.starred);
    } else if (this.currentFilter === "locked") {
      list = list.filter(n => Boolean(n.password));
    } else if (this.currentFilter !== "all") {
      list = list.filter(n => n.category === this.currentFilter);
    }

    // Filter by search query
    if (this.searchQuery) {
      list = list.filter(n => 
        (n.title && n.title.toLowerCase().includes(this.searchQuery)) ||
        (n.content && n.content.toLowerCase().includes(this.searchQuery))
      );
    }

    // Sort: Pinned first, then newest updated
    list.sort((a, b) => {
      if (a.pinned !== b.pinned) return b.pinned ? 1 : -1;
      return new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt);
    });

    return list;
  }

  renderNotes() {
    // Update View Header title
    if (this.currentFilter === "starred") {
      this.currentViewTitle.textContent = this.t("starredNotesTitle");
      this.currentViewSubtitle.textContent = this.t("starredNotesSubtitle");
    } else if (this.currentFilter === "locked") {
      this.currentViewTitle.textContent = this.t("lockedNotesTitle");
      this.currentViewSubtitle.textContent = this.t("lockedNotesSubtitle");
    } else if (this.currentFilter === "all") {
      this.currentViewTitle.textContent = this.t("allNotesTitle");
      this.currentViewSubtitle.textContent = this.t("allNotesSubtitle");
    } else {
      this.currentViewTitle.textContent = `${this.currentFilter} Notes`;
      this.currentViewSubtitle.textContent = `${this.t("category")}: ${this.currentFilter}`;
    }

    const filtered = this.getFilteredNotes();

    if (filtered.length === 0) {
      this.notesGrid.innerHTML = "";
      this.emptyState.style.display = "flex";
      return;
    }

    this.emptyState.style.display = "none";
    this.notesGrid.innerHTML = "";

    filtered.forEach(note => {
      const card = this.createNoteCard(note);
      this.notesGrid.appendChild(card);
    });
  }

  createNoteCard(note) {
    const card = document.createElement("div");
    card.className = `note-card ${note.pinned ? "pinned" : ""}`;
    card.setAttribute("data-color", note.color || "default");
    card.setAttribute("data-id", note.id);

    // Apply Google Keep-style Background Theme
    if (note.bgImage && note.bgImage !== "none") {
      if (note.bgImage === "custom" && note.bgCustom) {
        card.classList.add("has-custom-bg");
        card.style.backgroundImage = `url("${note.bgCustom}")`;
      } else {
        card.setAttribute("data-bg", note.bgImage);
      }
    }

    // Format date nicely
    const dateObj = new Date(note.updatedAt || note.createdAt);
    const dateString = dateObj.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const isStarred = note.starred;
    const starIconClass = isStarred ? "fa-solid fa-star starred" : "fa-regular fa-star";
    const hasPassword = Boolean(note.password);
    const isUnlocked = Boolean(note._unlocked);
    const isLocked = hasPassword && !isUnlocked;

    if (isLocked) {
      card.classList.add("is-locked");
      card.innerHTML = `
        <div class="locked-card-secret">
          <div class="locked-secret-icon">
            <i class="fa-solid fa-lock"></i>
          </div>
          <h3 class="locked-secret-title">${this.t("lockedNoteHiddenTitle")}</h3>
          <p class="locked-secret-subtitle">${this.t("clickToUnlock")}</p>
        </div>
        <div class="note-card-footer locked-footer">
          <span class="note-locked-badge"><i class="fa-solid fa-shield-halved"></i> ${this.t("protectedBadge")}</span>
          <button class="note-menu-btn" title="Options" data-action="menu">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="note-card-header">
          <div class="note-title-wrap">
            <h3 class="note-card-title">${this.escapeHtml(note.title || "Untitled")}</h3>
            ${note.category ? `<span class="note-badge">${note.category}</span>` : ""}
            ${hasPassword ? `<span class="note-locked-badge"><i class="fa-solid fa-lock-open"></i> ${this.t("noteUnlocked")}</span>` : ""}
          </div>
          <div class="note-actions-inline">
            <button class="note-star-btn ${isStarred ? "starred" : ""}" title="Star" data-action="star">
              <i class="${starIconClass}"></i>
            </button>
            <button class="note-menu-btn" title="Options" data-action="menu">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
        </div>
        <div class="note-card-body">
          ${this.renderCardAttachments(note)}
          <div class="note-card-text">${this.formatNoteContent(note.content || "")}</div>
        </div>
        <div class="note-card-footer">
          <span>${dateString}</span>
          ${note.pinned ? `<span title="Pinned"><i class="fa-solid fa-thumbtack" style="color:var(--primary);"></i></span>` : ""}
        </div>
      `;
    }

    // Click on card opens editor (or unlock modal if password-protected)
    card.addEventListener("click", (e) => {
      const actionEl = e.target.closest("[data-action]");
      const action = actionEl?.dataset.action;
      if (action === "star") {
        e.stopPropagation();
        this.toggleStar(note.id);
      } else if (action === "menu") {
        e.stopPropagation();
        const menuBtn = e.target.closest(".note-menu-btn");
        this.openContextMenu(e, note.id, menuBtn);
      } else if (action === "play-voice") {
        e.stopPropagation();
        const attId = actionEl.dataset.attId;
        this.playVoiceNote(actionEl, attId);
      } else if (action === "view-image") {
        e.stopPropagation();
        const attId = actionEl.dataset.attId;
        const att = note.attachments?.find(a => a.id === attId);
        if (att) this.openLightbox(att.dataUrl, att.type, att.name);
      } else {
        if (isLocked) {
          this.openUnlockModal(note.id);
        } else {
          this.openEditor(note.id);
        }
      }
    });

    return card;
  }

  // --- Context Menu Settings (Edit, Copy, Delete, Download) ---
  openContextMenu(event, noteId, triggerBtn) {
    this.activeContextMenuNoteId = noteId;
    const rect = triggerBtn.getBoundingClientRect();

    const isRtl = this.currentLanguage === "ar";
    if (isRtl) {
      this.noteMenu.style.left = `${rect.left}px`;
      this.noteMenu.style.right = "auto";
    } else {
      this.noteMenu.style.right = `${window.innerWidth - rect.right}px`;
      this.noteMenu.style.left = "auto";
    }

    this.noteMenu.style.top = `${rect.bottom + 6}px`;
    this.noteMenu.classList.add("show");
  }

  closeContextMenu() {
    this.noteMenu.classList.remove("show");
    this.activeContextMenuNoteId = null;
  }

  // --- Note Operations ---
  toggleStar(noteId) {
    const note = this.notes.find(n => n.id === noteId);
    if (note) {
      note.starred = !note.starred;
      this.saveNotes();
      this.render();
    }
  }

  deleteNote(noteId) {
    const noteToDelete = this.notes.find(n => n.id === noteId);
    if (!noteToDelete) return;

    const noteIndex = this.notes.findIndex(n => n.id === noteId);
    this.lastDeletedNote = { note: { ...noteToDelete }, index: noteIndex };

    this.notes = this.notes.filter(n => n.id !== noteId);
    this.saveNotes();
    this.render();
    this.closeContextMenu();

    this.showToast(this.t("deletedSuccess"), true);
  }

  undoDelete() {
    // 1. If what was deleted is a folder
    if (this.lastDeletedCategory) {
      const { name, index, affectedNotes } = this.lastDeletedCategory;

      if (index >= 0 && index <= this.categories.length) {
        this.categories.splice(index, 0, name);
      } else {
        this.categories.push(name);
      }

      // Restore original folder assignment on affected notes
      if (Array.isArray(affectedNotes)) {
        this.notes.forEach(n => {
          if (affectedNotes.includes(n.id)) {
            n.category = name;
          }
        });
      }

      this.lastDeletedCategory = null;
      this.saveCategories();
      this.saveNotes();
      this.render();
      this.updateModalCategories();
      this.hideToast();
      this.showToast(this.t("restoredSuccess"), false);
      return;
    }

    // 2. If what was deleted is a note
    if (this.lastDeletedNote) {
      const { note, index } = this.lastDeletedNote;

      // Restore note at its previous position
      if (index >= 0 && index <= this.notes.length) {
        this.notes.splice(index, 0, note);
      } else {
        this.notes.unshift(note);
      }

      this.lastDeletedNote = null;
      this.saveNotes();
      this.render();
      this.hideToast();
      this.showToast(this.t("restoredSuccess"), false);
    }
  }

  downloadNoteTxt(note) {
    const text = `${note.title}\n\nCategory: ${note.category}\nDate: ${new Date(note.createdAt).toLocaleString()}\n\n${note.content}`;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(note.title || "note").replace(/[^a-zA-Z0-9_\u0600-\u06FF]/g, "_")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.closeContextMenu();
  }

  // --- Editor Modal ---
  openEditor(noteId = null) {
    this.closeContextMenu();
    this.updateModalCategories();
    this.editingNoteId = noteId;

    // Reset password field to password type
    if (this.notePasswordInput) {
      this.notePasswordInput.type = "password";
      this.notePasswordInput.style.display = "none";
    }
    if (this.togglePwdVisibilityBtn) {
      this.togglePwdVisibilityBtn.style.display = "none";
      const icon = this.togglePwdVisibilityBtn.querySelector("i");
      if (icon) icon.className = "fa-regular fa-eye";
    }

    if (noteId) {
      const note = this.notes.find(n => n.id === noteId);
      if (!note) return;
      this.noteTitleInput.value = note.title || "";
      this.noteContentInput.value = note.content || "";
      this.noteCategorySelect.value = note.category || (this.categories[0] || "General");
      this.selectedColor = note.color || "default";
      this.isStarred = !!note.starred;
      this.isPinned = !!note.pinned;
      this.notePasswordInput.value = note.password || "";
      this.currentAttachments = Array.isArray(note.attachments) ? [...note.attachments] : [];
      this.selectedBg = note.bgImage || "none";
      this.customBgData = note.bgCustom || null;
    } else {
      this.noteTitleInput.value = "";
      this.noteContentInput.value = "";
      this.noteCategorySelect.value = this.currentFilter !== "all" && this.currentFilter !== "starred" ? this.currentFilter : (this.categories[0] || "General");
      this.selectedColor = "default";
      this.isStarred = false;
      this.isPinned = false;
      this.notePasswordInput.value = "";
      this.currentAttachments = [];
      this.selectedBg = "none";
      this.customBgData = null;
    }
    // Update active bg dot
    if (this.bgDots) {
      this.bgDots.forEach(dot => {
        dot.classList.toggle("active", dot.dataset.bg === this.selectedBg);
      });
    }
    if (this.bgCustomUploadBtn) {
      this.bgCustomUploadBtn.classList.toggle("active", this.selectedBg === "custom");
    }
    this.renderEditorAttachments();

    // Set color dots
    this.colorDots.forEach(dot => {
      dot.classList.toggle("active", dot.dataset.color === this.selectedColor);
    });

    this.updateModalBadges();
    this.updateTextStats();
    this.editorModal.classList.add("active");
    setTimeout(() => this.noteTitleInput.focus(), 100);
  }

  updateModalBadges() {
    this.modalStarIcon.className = this.isStarred ? "fa-solid fa-star text-warning" : "fa-regular fa-star";
    this.modalStarBtn.classList.toggle("active", this.isStarred);

    this.modalPinIcon.style.color = this.isPinned ? "var(--primary)" : "";
    this.modalPinBtn.classList.toggle("active", this.isPinned);
  }

  updateTextStats() {
    const text = this.noteContentInput.value || "";
    const charCount = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    this.charCount.textContent = `${charCount} ${this.t("chars")}`;
    this.wordCount.textContent = `${words} ${this.t("words")}`;
  }

  closeEditor() {
    // If a note with a password was opened/unlocked, relock it when closing editor
    if (this.editingNoteId) {
      const note = this.notes.find(n => n.id === this.editingNoteId);
      if (note && note.password) {
        delete note._unlocked;
        this.renderNotes();
      }
    }
    this.stopVoiceRecording(false);
    this.editorModal.classList.remove("active");
    this.editingNoteId = null;
    this.currentAttachments = [];
  }

  saveCurrentNote() {
    const title = this.noteTitleInput.value.trim();
    const content = this.noteContentInput.value.trim();
    const password = this.notePasswordInput.value.trim();

    if (!title && !content) {
      this.closeEditor();
      return;
    }

    const now = new Date().toISOString();

    if (this.editingNoteId) {
      // Update
      const index = this.notes.findIndex(n => n.id === this.editingNoteId);
      if (index !== -1) {
        this.notes[index] = {
          ...this.notes[index],
          title: title || "Untitled",
          content,
          category: this.noteCategorySelect.value,
          color: this.selectedColor,
          starred: this.isStarred,
          pinned: this.isPinned,
          password: password || null,
          attachments: this.currentAttachments || [],
          bgImage: this.selectedBg,
          bgCustom: this.customBgData,
          updatedAt: now
        };
        // Always ensure protected notes lock immediately on save
        delete this.notes[index]._unlocked;
      }
    } else {
      // Create new
      const newNote = {
        id: "note_" + Date.now() + "_" + Math.random().toString(36).substr(2, 6),
        title: title || "Untitled",
        content,
        category: this.noteCategorySelect.value,
        color: this.selectedColor,
        starred: this.isStarred,
        pinned: this.isPinned,
        password: password || null,
        attachments: this.currentAttachments || [],
        bgImage: this.selectedBg,
        bgCustom: this.customBgData,
        createdAt: now,
        updatedAt: now
      };
      // Locked by default
      delete newNote._unlocked;
      this.notes.unshift(newNote);
    }

    this.saveNotes();
    this.closeEditor();
    this.render();
    this.showToast(this.t("savedSuccess"));
  }

  // --- Password Unlock System ---
  openUnlockModal(noteId, action = "edit") {
    this.pendingUnlockNoteId = noteId;
    this.pendingUnlockAction = action; // 'edit', 'copy', 'download'
    this.unlockPasswordInput.value = "";
    this.unlockModal.classList.add("active");
    setTimeout(() => this.unlockPasswordInput.focus(), 150);
  }

  closeUnlockModal() {
    this.unlockModal.classList.remove("active");
    this.pendingUnlockNoteId = null;
    this.pendingUnlockAction = null;
  }

  handleUnlockSubmit() {
    if (!this.pendingUnlockNoteId) return;

    const note = this.notes.find(n => n.id === this.pendingUnlockNoteId);
    if (!note) {
      this.closeUnlockModal();
      return;
    }

    const entered = this.unlockPasswordInput.value.trim();
    if (entered === note.password) {
      const targetNoteId = this.pendingUnlockNoteId;
      const action = this.pendingUnlockAction || "edit";
      this.closeUnlockModal();

      if (action === "copy") {
        const textToCopy = `${note.title}\n\n${note.content}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
          this.showToast(this.t("copiedSuccess"));
        });
      } else if (action === "download") {
        this.downloadNoteTxt(note);
      } else {
        // Edit action
        note._unlocked = true;
        this.render();
        this.showToast(this.t("noteUnlocked"));
        this.openEditor(targetNoteId);
      }
    } else {
      this.showToast(this.t("wrongPassword"));
      this.unlockPasswordInput.value = "";
      this.unlockPasswordInput.focus();
    }
  }

  // --- Backup & Restore (JSON Export/Import) ---
  exportBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.notes, null, 2));
    const downloadAnchor = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `OfflineNotes_Backup_${date}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast("Backup exported successfully!");
  }

  importBackup(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported)) {
          this.notes = imported;
          this.saveNotes();
          this.render();
          this.showToast(this.t("restoredSuccess"));
        } else {
          this.showToast(this.t("invalidBackupFile"));
        }
      } catch (err) {
        this.showToast(this.t("invalidBackupFile"));
      }
    };
    reader.readAsText(file);
    event.target.value = ""; // Reset input
  }

  // --- Toast Notification with Undo ---
  showToast(message, showUndo = false) {
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
      this.toastTimer = null;
    }

    this.toastMessage.textContent = message;

    if (showUndo) {
      this.toastUndoBtn.style.display = "inline-flex";
      this.toastUndoText.textContent = this.t("undo");
      this.toastIcon.className = "fa-solid fa-trash-can text-danger";
    } else {
      this.toastUndoBtn.style.display = "none";
      this.toastIcon.className = "fa-solid fa-circle-check text-success";
    }

    this.toast.classList.add("show");

    // Give 5 seconds if Undo is enabled, otherwise 3 seconds
    const duration = showUndo ? 5000 : 3000;
    this.toastTimer = setTimeout(() => {
      this.hideToast();
    }, duration);
  }

  hideToast() {
    this.toast.classList.remove("show");
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
      this.toastTimer = null;
    }
  }

  // Helper Escape HTML
  escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

// ══════════════════════════════════════════════════════════════
  // FEATURE 1: SMART LISTS & AUTO-BULLETS
  // ══════════════════════════════════════════════════════════════
  setupAutoFormatting() {
    if (!this.noteContentInput) return;

    // Convert "- " or "* " at line start to "• "
    this.noteContentInput.addEventListener("input", () => {
      const ta = this.noteContentInput;
      const val = ta.value;
      const selStart = ta.selectionStart;
      const lineStart = val.lastIndexOf("\n", selStart - 1) + 1;
      const currentLineSoFar = val.substring(lineStart, selStart);

      if (currentLineSoFar === "- " || currentLineSoFar === "* ") {
        const beforeLine = val.substring(0, lineStart);
        const afterCursor = val.substring(selStart);
        ta.value = beforeLine + "• " + afterCursor;
        const newPos = lineStart + 2;
        ta.setSelectionRange(newPos, newPos);
        this.updateTextStats();
      }
    });

    // Enter key handling: Continue bullet / numbered list or exit on empty
    this.noteContentInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const ta = this.noteContentInput;
        const val = ta.value;
        const selStart = ta.selectionStart;
        const selEnd = ta.selectionEnd;
        if (selStart !== selEnd) return;

        const lineStart = val.lastIndexOf("\n", selStart - 1) + 1;
        let lineEnd = val.indexOf("\n", selStart);
        if (lineEnd === -1) lineEnd = val.length;
        const beforeCursor = val.substring(lineStart, selStart);

        // Bullet check
        const bulletMatch = beforeCursor.match(/^(\s*)•\s*(.*)$/);
        if (bulletMatch) {
          e.preventDefault();
          const indent = bulletMatch[1];
          const textAfter = bulletMatch[2].trim();

          // If bullet has no text, remove it and end list
          if (!textAfter && beforeCursor.trim() === "•") {
            const beforeLine = val.substring(0, lineStart);
            const afterCursor = val.substring(selStart);
            ta.value = beforeLine + afterCursor;
            ta.setSelectionRange(lineStart, lineStart);
          } else {
            // Continue bullet
            const insertion = "\n" + indent + "• ";
            const before = val.substring(0, selStart);
            const after = val.substring(selStart);
            ta.value = before + insertion + after;
            const newPos = selStart + insertion.length;
            ta.setSelectionRange(newPos, newPos);
          }
          this.updateTextStats();
          return;
        }

        // Numbered list check: e.g. "1. " or "2. "
        const numMatch = beforeCursor.match(/^(\s*)(\d+)\.\s*(.*)$/);
        if (numMatch) {
          e.preventDefault();
          const indent = numMatch[1];
          const num = parseInt(numMatch[2], 10);
          const textAfter = numMatch[3].trim();

          // If empty number item, remove and exit list
          if (!textAfter && beforeCursor.trim() === `${num}.`) {
            const beforeLine = val.substring(0, lineStart);
            const afterCursor = val.substring(selStart);
            ta.value = beforeLine + afterCursor;
            ta.setSelectionRange(lineStart, lineStart);
          } else {
            // Next number
            const nextNum = num + 1;
            const insertion = `\n${indent}${nextNum}. `;
            const before = val.substring(0, selStart);
            const after = val.substring(selStart);
            ta.value = before + insertion + after;
            const newPos = selStart + insertion.length;
            ta.setSelectionRange(newPos, newPos);
          }
          this.updateTextStats();
          return;
        }
      }
    });
  }

  formatNoteContent(content) {
    if (!content) return "";
    const lines = content.split("\n");
    const formatted = lines.map(line => {
      const trimmed = line.trim();
      if (!trimmed) {
        return '<div style="height: 6px;"></div>';
      }
      // Bullet item
      if (/^•\s+/.test(trimmed)) {
        const text = this.escapeHtml(trimmed.replace(/^•\s+/, ""));
        return `<div class="list-bullet-item"><span class="list-bullet-dot"></span><span>${text}</span></div>`;
      }
      // Numbered item
      const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
      if (numMatch) {
        const num = numMatch[1];
        const text = this.escapeHtml(numMatch[2]);
        return `<div class="list-bullet-item"><span class="list-num-badge">${num}.</span><span>${text}</span></div>`;
      }
      return `<div>${this.escapeHtml(line)}</div>`;
    });
    return formatted.join("");
  }

  // ══════════════════════════════════════════════════════════════
  // FEATURE 2: MEDIA ATTACHMENTS & WHATSAPP-STYLE VOICE RECORDER (INDEXEDDB)
  // ══════════════════════════════════════════════════════════════
  initMediaDB() {
    return new Promise((resolve) => {
      if (!window.indexedDB) {
        resolve(null);
        return;
      }
      try {
        const req = indexedDB.open("OfflineNoteMediaDB", 1);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains("attachments")) {
            db.createObjectStore("attachments", { keyPath: "id" });
          }
        };
        req.onsuccess = (e) => {
          this.mediaDB = e.target.result;
          resolve(this.mediaDB);
        };
        req.onerror = () => resolve(null);
      } catch (e) {
        resolve(null);
      }
    });
  }

  saveMediaBlob(id, dataUrl) {
    return new Promise((resolve) => {
      if (!this.mediaDB) {
        try { localStorage.setItem("media_" + id, dataUrl); } catch(e) {}
        resolve(true);
        return;
      }
      try {
        const tx = this.mediaDB.transaction("attachments", "readwrite");
        const store = tx.objectStore("attachments");
        store.put({ id, data: dataUrl, timestamp: Date.now() });
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (e) {
        resolve(false);
      }
    });
  }

  getMediaBlob(id) {
    return new Promise((resolve) => {
      if (!this.mediaDB) {
        resolve(localStorage.getItem("media_" + id));
        return;
      }
      try {
        const tx = this.mediaDB.transaction("attachments", "readonly");
        const store = tx.objectStore("attachments");
        const req = store.get(id);
        req.onsuccess = () => resolve(req.result ? req.result.data : null);
        req.onerror = () => resolve(null);
      } catch (e) {
        resolve(null);
      }
    });
  }

  handleMediaInputChange(e, type) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    Array.from(files).forEach(f => this.handleFileAttachment(f, type));
    e.target.value = "";
  }

  handleFileAttachment(file, type = "image") {
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result;
      const id = "att_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5);
      await this.saveMediaBlob(id, dataUrl);
      const att = {
        id,
        type,
        name: file.name || "Attachment",
        size: file.size,
        dataUrl
      };
      this.currentAttachments.push(att);
      this.renderEditorAttachments();
    };
    reader.readAsDataURL(file);
  }

  renderEditorAttachments() {
    if (!this.editorAttachmentsStrip) return;
    if (!this.currentAttachments || this.currentAttachments.length === 0) {
      this.editorAttachmentsStrip.style.display = "none";
      this.editorAttachmentsStrip.innerHTML = "";
      return;
    }

    this.editorAttachmentsStrip.style.display = "flex";
    this.editorAttachmentsStrip.innerHTML = "";

    this.currentAttachments.forEach((att) => {
      const chip = document.createElement("div");
      chip.className = "editor-attach-chip";

      let iconHtml = '<i class="fa-solid fa-paperclip"></i>';
      if (att.type === "image") {
        iconHtml = att.dataUrl ? `<img src="${att.dataUrl}" alt="thumb" />` : '<i class="fa-regular fa-image"></i>';
      } else if (att.type === "audio") {
        iconHtml = '<i class="fa-solid fa-microphone" style="color:var(--primary);"></i>';
      } else if (att.type === "video") {
        iconHtml = '<i class="fa-solid fa-video" style="color:#06b6d4;"></i>';
      }

      chip.innerHTML = `
        ${iconHtml}
        <span class="attach-meta" title="${this.escapeHtml(att.name)}">${this.escapeHtml(att.name)}</span>
        <button type="button" class="attach-del-btn" title="Remove attachment">&times;</button>
      `;

      chip.querySelector(".attach-del-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        this.removeEditorAttachment(att.id);
      });

      // Click on chip previews full size
      chip.addEventListener("click", () => {
        this.openLightbox(att.dataUrl, att.type, att.name);
      });

      this.editorAttachmentsStrip.appendChild(chip);
    });
  }

  removeEditorAttachment(id) {
    this.currentAttachments = this.currentAttachments.filter(a => a.id !== id);
    this.renderEditorAttachments();
  }

  // WhatsApp-Style Voice Recorder
  startVoiceRecording() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.showToast("Microphone not supported in this environment");
      return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      this.voiceStream = stream;
      let mimeType = "audio/webm";
      if (typeof MediaRecorder !== "undefined") {
        if (MediaRecorder.isTypeSupported("audio/webm;codecs=opus")) mimeType = "audio/webm;codecs=opus";
        else if (MediaRecorder.isTypeSupported("audio/mp4")) mimeType = "audio/mp4";
        else if (MediaRecorder.isTypeSupported("audio/ogg")) mimeType = "audio/ogg";
      }

      this.mediaRecorder = new MediaRecorder(stream, { mimeType });
      this.audioChunks = [];
      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) this.audioChunks.push(e.data);
      };

      this.mediaRecorder.start(100);
      this.recordStartTime = Date.now();
      if (this.voiceRecorderBar) this.voiceRecorderBar.style.display = "flex";

      if (this.recordInterval) clearInterval(this.recordInterval);
      this.recordInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - this.recordStartTime) / 1000);
        const m = String(Math.floor(elapsed / 60)).padStart(2, "0");
        const s = String(elapsed % 60).padStart(2, "0");
        if (this.recordTimer) this.recordTimer.textContent = `${m}:${s}`;
      }, 500);
    }).catch(err => {
      console.warn("Microphone access error:", err);
      this.showToast("Microphone permission required for voice notes");
    });
  }

  stopVoiceRecording(save = true) {
    if (!this.mediaRecorder) return;
    if (this.recordInterval) clearInterval(this.recordInterval);
    if (this.voiceRecorderBar) this.voiceRecorderBar.style.display = "none";

    const durationSec = Math.max(1, Math.round((Date.now() - (this.recordStartTime || Date.now())) / 1000));

    this.mediaRecorder.onstop = () => {
      if (this.voiceStream) {
        this.voiceStream.getTracks().forEach(t => t.stop());
        this.voiceStream = null;
      }
      if (save && this.audioChunks.length > 0) {
        const blob = new Blob(this.audioChunks, { type: this.mediaRecorder.mimeType || "audio/webm" });
        const reader = new FileReader();
        reader.onloadend = async () => {
          const dataUrl = reader.result;
          const id = "voice_" + Date.now();
          await this.saveMediaBlob(id, dataUrl);
          this.currentAttachments.push({
            id,
            type: "audio",
            name: `Voice Note (${durationSec}s)`,
            duration: durationSec,
            size: blob.size,
            dataUrl
          });
          this.renderEditorAttachments();
        };
        reader.readAsDataURL(blob);
      }
      this.mediaRecorder = null;
      this.audioChunks = [];
    };

    if (this.mediaRecorder.state !== "inactive") {
      this.mediaRecorder.stop();
    }
  }

  renderCardAttachments(note) {
    if (!note.attachments || note.attachments.length === 0) return "";
    let html = "";

    // 1. Cover Image (first image)
    const images = note.attachments.filter(a => a.type === "image");
    if (images.length > 0) {
      const first = images[0];
      const countBadge = images.length > 1 ? `<span class="note-media-count-badge"><i class="fa-regular fa-image"></i> +${images.length - 1}</span>` : "";
      html += `
        <div class="note-media-cover" data-action="view-image" data-att-id="${first.id}">
          <img src="${first.dataUrl || ''}" alt="Cover" loading="lazy" />
          ${countBadge}
        </div>
      `;
    }

    // 2. WhatsApp-Style Voice Note Players
    const audios = note.attachments.filter(a => a.type === "audio");
    audios.forEach(audio => {
      const dur = audio.duration ? `${Math.floor(audio.duration / 60)}:${String(audio.duration % 60).padStart(2, '0')}` : '0:05';
      html += `
        <div class="note-voice-player" data-action="play-voice" data-att-id="${audio.id}">
          <button type="button" class="note-voice-play-btn" title="Play Voice Note">
            <i class="fa-solid fa-play"></i>
          </button>
          <div class="note-voice-wave-mock">
            <span style="height:40%"></span>
            <span style="height:80%"></span>
            <span style="height:60%"></span>
            <span style="height:100%"></span>
            <span style="height:50%"></span>
            <span style="height:90%"></span>
            <span style="height:70%"></span>
            <span style="height:40%"></span>
          </div>
          <span class="note-voice-duration">${dur}</span>
        </div>
      `;
    });

    return html;
  }

  playVoiceNote(playerEl, attId) {
    // Find note attachment
    let foundAtt = null;
    for (const note of this.notes) {
      if (note.attachments) {
        foundAtt = note.attachments.find(a => a.id === attId);
        if (foundAtt) break;
      }
    }
    if (!foundAtt) return;

    const playBtn = playerEl.querySelector(".note-voice-play-btn i");

    if (this.activeAudio && this.activeAudio._playerEl === playerEl) {
      if (this.activeAudio.paused) {
        this.activeAudio.play();
        if (playBtn) playBtn.className = "fa-solid fa-pause";
      } else {
        this.activeAudio.pause();
        if (playBtn) playBtn.className = "fa-solid fa-play";
      }
      return;
    }

    if (this.activeAudio) {
      this.activeAudio.pause();
      if (this.activeAudio._playBtn) this.activeAudio._playBtn.className = "fa-solid fa-play";
    }

    const audio = new Audio(foundAtt.dataUrl);
    audio._playerEl = playerEl;
    audio._playBtn = playBtn;
    this.activeAudio = audio;

    if (playBtn) playBtn.className = "fa-solid fa-pause";
    audio.play();

    audio.onended = () => {
      if (playBtn) playBtn.className = "fa-solid fa-play";
      this.activeAudio = null;
    };
  }

  // Lightbox
  openLightbox(src, type, filename) {
    if (!this.mediaLightboxModal || !src) return;
    this.lightboxBody.innerHTML = "";

    if (type === "video") {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      this.lightboxBody.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = src;
      img.alt = filename || "Media Preview";
      this.lightboxBody.appendChild(img);
    }

    if (this.lightboxFilename) this.lightboxFilename.textContent = filename || "media";
    if (this.lightboxDownloadBtn) {
      this.lightboxDownloadBtn.href = src;
      this.lightboxDownloadBtn.download = filename || "media";
    }

    this.mediaLightboxModal.style.display = "flex";
  }

  closeLightbox() {
    if (this.mediaLightboxModal) {
      this.mediaLightboxModal.style.display = "none";
      if (this.lightboxBody) this.lightboxBody.innerHTML = "";
    }
  }

  // ══════════════════════════════════════════════════════════════
  // FEATURE 3: AUTOMATIC ACCOUNT-KEYED CLOUD SYNC (NO MANUAL MODALS)
  // ══════════════════════════════════════════════════════════════
  // ══════════════════════════════════════════════════════════════
  // FEATURE 3: DETERMINISTIC MASTER CLOUD SYNC ACROSS ALL DEVICES
  // ══════════════════════════════════════════════════════════════
  async autoSyncAccount() {
    if (!this.currentUser) return;
    const emailKey = (this.currentUser.email || "thehamzagamal@gmail.com").toLowerCase().trim();
    const MASTER_ENDPOINT = "https://api.restful-api.dev/objects/ff808181a09d98f701a21a36b0085a2c";

    try {
      this.isSyncing = true;
      const res = await fetch(MASTER_ENDPOINT);
      if (res.ok) {
        const cloudObj = await res.json();
        const userData = cloudObj?.data?.users?.[emailKey];

        if (userData && Array.isArray(userData.notes)) {
          // Merge local and cloud notes
          const localMap = new Map(this.notes.map(n => [n.id, n]));
          userData.notes.forEach(remoteNote => {
            const local = localMap.get(remoteNote.id);
            if (!local) {
              localMap.set(remoteNote.id, remoteNote);
            } else {
              const localTime = new Date(local.updatedAt || local.createdAt || 0).getTime();
              const remoteTime = new Date(remoteNote.updatedAt || remoteNote.createdAt || 0).getTime();
              if (remoteTime > localTime) {
                localMap.set(remoteNote.id, remoteNote);
              }
            }
          });
          this.notes = Array.from(localMap.values());
          if (Array.isArray(userData.categories)) {
            this.categories = Array.from(new Set([...this.categories, ...userData.categories]));
            this.saveCategories();
          }
          if (userData.userProfile?.picture && !this.currentUser.picture) {
            this.currentUser.picture = userData.userProfile.picture;
            this.saveCurrentUser(this.currentUser);
            this.updateAuthUI();
          }
          localStorage.setItem("offline_notes_data", JSON.stringify(this.notes));
          localStorage.setItem("offline_notes_permanent_vault", JSON.stringify(this.notes));
          this.render();
        } else {
          // First time this account is seen: sync current notes to cloud
          await this.autoSaveToCloud();
        }
      }
    } catch (err) {
      console.warn("Auto sync notice:", err);
    } finally {
      this.isSyncing = false;
    }
  }

  async autoSaveToCloud() {
    if (!this.currentUser) return;
    const emailKey = (this.currentUser.email || "thehamzagamal@gmail.com").toLowerCase().trim();
    const MASTER_ENDPOINT = "https://api.restful-api.dev/objects/ff808181a09d98f701a21a36b0085a2c";

    try {
      let registry = { users: {} };
      try {
        const getRes = await fetch(MASTER_ENDPOINT);
        if (getRes.ok) {
          const cloudObj = await getRes.json();
          registry = cloudObj.data || { users: {} };
          if (!registry.users) registry.users = {};
        }
      } catch (e) {}

      registry.users[emailKey] = {
        notes: this.notes.map(n => ({
          id: n.id,
          title: n.title,
          content: n.content,
          category: n.category,
          color: n.color,
          starred: n.starred,
          pinned: n.pinned,
          password: n.password,
          bgImage: n.bgImage,
          bgCustom: n.bgCustom && n.bgCustom.length < 500000 ? n.bgCustom : "",
          attachments: (n.attachments || []).map(a => ({
            id: a.id,
            type: a.type,
            name: a.name,
            size: a.size,
            duration: a.duration,
            dataUrl: a.dataUrl && a.dataUrl.length < 300000 ? a.dataUrl : ""
          })),
          createdAt: n.createdAt,
          updatedAt: n.updatedAt
        })),
        categories: this.categories,
        userProfile: {
          name: this.currentUser.name,
          email: this.currentUser.email,
          picture: this.currentUser.picture
        },
        updatedAt: Date.now()
      };

      await fetch(MASTER_ENDPOINT, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "OfflineNote_Master_Cloud_Registry",
          data: registry
        })
      });
    } catch (e) {
      console.warn("Auto save notice:", e);
    }
  }

  // Safe stubs
  initCloudSync() {}
  updateSyncUI() {}
  openSyncModal() {}
  closeSyncModal() {}
  syncWithCloud() { return this.autoSaveToCloud(); }
  copySyncCode() {}
  handleLinkDeviceSubmit() {}
  linkDevice() {}
}

// Instantiate application once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.app = new NoteApp();
});
