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
    protectedBadge: "Locked",
    langName: "English"
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
    protectedBadge: "محمية",
    langName: "العربية"
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

    this.initElements();
    this.initEvents();
    this.applyTheme(this.currentTheme);
    this.applyLanguage(this.currentLanguage);
    this.render();
  }

  // LocalStorage Helpers
  loadNotes() {
    try {
      const data = localStorage.getItem("offline_notes_data");
      return data ? JSON.parse(data) : [];
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
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
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

    // Import / Export
    this.exportDataBtn = document.getElementById("exportDataBtn");
    this.importDataInput = document.getElementById("importDataInput");
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
    this.togglePwdVisibilityBtn.addEventListener("click", () => {
      const isPwd = this.notePasswordInput.type === "password";
      this.notePasswordInput.type = isPwd ? "text" : "password";
      this.togglePwdVisibilityBtn.querySelector("i").className = isPwd ? "fa-regular fa-eye-slash" : "fa-regular fa-eye";
    });

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
        this.openEditor(this.activeContextMenuNoteId);
      }
    });

    this.menuCopy.addEventListener("click", () => {
      if (this.activeContextMenuNoteId) {
        const note = this.notes.find(n => n.id === this.activeContextMenuNoteId);
        if (note) {
          const textToCopy = `${note.title}\n\n${note.content}`;
          navigator.clipboard.writeText(textToCopy).then(() => {
            this.showToast(this.t("copiedSuccess"));
          });
        }
      }
    });

    this.menuDownload.addEventListener("click", () => {
      if (this.activeContextMenuNoteId) {
        const note = this.notes.find(n => n.id === this.activeContextMenuNoteId);
        if (note) {
          this.downloadNoteTxt(note);
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
    this.countAll.textContent = total;
    this.countStarred.textContent = starred;
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
    this.showToast(`Folder "${catName}" removed`);
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
    }

    const previewContent = isLocked
      ? "••••••••••••••••••••••••••••••••••••••••••••••••••••••••"
      : (note.content || "");

    card.innerHTML = `
      <div class="note-card-header">
        <div class="note-title-wrap">
          <h3 class="note-card-title">${this.escapeHtml(note.title || "Untitled")}</h3>
          ${note.category ? `<span class="note-badge">${note.category}</span>` : ""}
          ${hasPassword ? `<span class="note-locked-badge"><i class="fa-solid fa-lock"></i> ${this.t("protectedBadge")}</span>` : ""}
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
        <p class="note-card-text">${this.escapeHtml(previewContent)}</p>
      </div>
      <div class="note-card-footer">
        <span>${dateString}</span>
        ${note.pinned ? `<span title="Pinned"><i class="fa-solid fa-thumbtack" style="color:var(--primary);"></i></span>` : ""}
      </div>
    `;

    // Click on card opens editor (or unlock modal if password-protected)
    card.addEventListener("click", (e) => {
      const action = e.target.closest("[data-action]")?.dataset.action;
      if (action === "star") {
        e.stopPropagation();
        this.toggleStar(note.id);
      } else if (action === "menu") {
        e.stopPropagation();
        const menuBtn = e.target.closest(".note-menu-btn");
        this.openContextMenu(e, note.id, menuBtn);
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
    if (!this.lastDeletedNote) return;
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
    this.notePasswordInput.type = "password";
    this.togglePwdVisibilityBtn.querySelector("i").className = "fa-regular fa-eye";

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
    } else {
      this.noteTitleInput.value = "";
      this.noteContentInput.value = "";
      this.noteCategorySelect.value = this.currentFilter !== "all" && this.currentFilter !== "starred" ? this.currentFilter : (this.categories[0] || "General");
      this.selectedColor = "default";
      this.isStarred = false;
      this.isPinned = false;
      this.notePasswordInput.value = "";
    }

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
    this.editorModal.classList.remove("active");
    this.editingNoteId = null;
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
          _unlocked: true,
          updatedAt: now
        };
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
        _unlocked: true,
        createdAt: now,
        updatedAt: now
      };
      this.notes.unshift(newNote);
    }

    this.saveNotes();
    this.render();
    this.closeEditor();
    this.showToast(this.t("savedSuccess"));
  }

  // --- Password Unlock System ---
  openUnlockModal(noteId) {
    this.pendingUnlockNoteId = noteId;
    this.unlockPasswordInput.value = "";
    this.unlockModal.classList.add("active");
    setTimeout(() => this.unlockPasswordInput.focus(), 150);
  }

  closeUnlockModal() {
    this.unlockModal.classList.remove("active");
    this.pendingUnlockNoteId = null;
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
      note._unlocked = true;
      const targetNoteId = this.pendingUnlockNoteId;
      this.closeUnlockModal();
      this.render();
      this.showToast(this.t("noteUnlocked"));
      this.openEditor(targetNoteId);
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
}

// Instantiate application once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.app = new NoteApp();
});

