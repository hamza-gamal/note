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
    addCategoryPrompt: "Enter new folder/category name:",
    editCategoryPrompt: "Rename folder to:",
    confirmDeleteCategory: "Delete folder '{cat}'? Notes in this folder will be moved to General.",
    categoryExists: "This folder already exists!",
    categoryNameEmpty: "Folder name cannot be empty.",
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
    addCategoryPrompt: "أدخل اسم المجلد أو التصنيف الجديد:",
    editCategoryPrompt: "تعديل اسم المجلد إلى:",
    confirmDeleteCategory: "هل تريد بالتأكيد حذف المجلد '{cat}'؟ سيتم نقل ملاحظاته إلى عام (General).",
    categoryExists: "هذا المجلد موجود بالفعل!",
    categoryNameEmpty: "لا يمكن أن يكون اسم المجلد فارغاً.",
    langName: "العربية"
  },
  zh: {
    appName: "离线便签",
    newNote: "新建便签",
    views: "视图",
    allNotes: "所有便签",
    starredNotes: "星标便签",
    categories: "分类",
    actions: "操作",
    exportBackup: "备份便签 (JSON)",
    importBackup: "恢复便签",
    mainWebsite: "Hamza 主页",
    privacyBadge: "100% 离线与隐私安全",
    searchPlaceholder: "搜索标题或内容...",
    allNotesTitle: "所有便签",
    allNotesSubtitle: "完全保存在浏览器本地，无需联网或登录。",
    starredNotesTitle: "星标便签",
    starredNotesSubtitle: "您收藏的重要想法和待办事项。",
    noNotesTitle: "暂无便签",
    noNotesDesc: "现在创建您的第一条便签，所有数据仅存储在您的设备上。",
    createFirstNote: "创建便签",
    noteTitlePlaceholder: "便签标题...",
    category: "分类",
    color: "颜色",
    noteContentPlaceholder: "在此输入您的笔记内容...",
    cancel: "取消",
    saveNote: "保存便签",
    edit: "编辑",
    copy: "复制内容",
    downloadTxt: "导出为 .txt",
    delete: "删除",
    confirmDelete: "确定要删除这条便签吗？",
    copiedSuccess: "便签已复制到剪贴板！",
    savedSuccess: "便签已保存！",
    deletedSuccess: "便签已删除！",
    restoredSuccess: "便签恢复成功！",
    invalidBackupFile: "无效的备份文件格式。",
    chars: "字符",
    words: "词",
    storedCount: "条便签本地存储",
    emptyCategory: "此分类下暂无便签",
    langName: "中文"
  },
  es: {
    appName: "OfflineNote",
    newNote: "Nueva Nota",
    views: "Vistas",
    allNotes: "Todas las Notas",
    starredNotes: "Destacadas",
    categories: "Categorías",
    actions: "Acciones",
    exportBackup: "Copia de seguridad (JSON)",
    importBackup: "Restaurar Notas",
    mainWebsite: "Portafolio de Hamza",
    privacyBadge: "100% Offline y Privado",
    searchPlaceholder: "Buscar notas...",
    allNotesTitle: "Todas las Notas",
    allNotesSubtitle: "Privado, seguro y guardado directamente en tu navegador sin internet.",
    starredNotesTitle: "Notas Destacadas",
    starredNotesSubtitle: "Tus pensamientos y notas favoritas.",
    noNotesTitle: "No se encontraron notas",
    noNotesDesc: "Crea tu primera nota offline ahora. Todo permanece seguro en tu dispositivo.",
    createFirstNote: "Crear una Nota",
    noteTitlePlaceholder: "Título de la nota...",
    category: "Categoría",
    color: "Color",
    noteContentPlaceholder: "Escribe tu nota aquí...",
    cancel: "Cancelar",
    saveNote: "Guardar Nota",
    edit: "Editar",
    copy: "Copiar Contenido",
    downloadTxt: "Descargar como .txt",
    delete: "Eliminar",
    confirmDelete: "¿Estás seguro de que deseas eliminar esta nota?",
    copiedSuccess: "¡Nota copiada al portapapeles!",
    savedSuccess: "¡Nota guardada con éxito!",
    deletedSuccess: "¡Nota eliminada con éxito!",
    restoredSuccess: "¡Notas restauradas con éxito!",
    invalidBackupFile: "Formato de archivo inválido.",
    chars: "caracteres",
    words: "palabras",
    storedCount: "notas guardadas localmente",
    emptyCategory: "No hay notas en esta categoría",
    langName: "Español"
  },
  fr: {
    appName: "OfflineNote",
    newNote: "Nouvelle Note",
    views: "Vues",
    allNotes: "Toutes les Notes",
    starredNotes: "Favoris",
    categories: "Catégories",
    actions: "Actions",
    exportBackup: "Sauvegarde (JSON)",
    importBackup: "Restaurer les Notes",
    mainWebsite: "Portfolio d'Hamza",
    privacyBadge: "100% Hors-ligne & Privé",
    searchPlaceholder: "Rechercher des notes...",
    allNotesTitle: "Toutes les Notes",
    allNotesSubtitle: "Privé, sécurisé et sauvegardé localement sans connexion internet.",
    starredNotesTitle: "Notes Favorites",
    starredNotesSubtitle: "Vos pensées et tâches importantes.",
    noNotesTitle: "Aucune note trouvée",
    noNotesDesc: "Créez votre première note hors-ligne dès maintenant.",
    createFirstNote: "Créer une Note",
    noteTitlePlaceholder: "Titre de la note...",
    category: "Catégorie",
    color: "Couleur",
    noteContentPlaceholder: "Commencez à rédiger votre note ici...",
    cancel: "Annuler",
    saveNote: "Enregistrer",
    edit: "Modifier",
    copy: "Copier le Contenu",
    downloadTxt: "Télécharger en .txt",
    delete: "Supprimer",
    confirmDelete: "Voulez-vous vraiment supprimer cette note ?",
    copiedSuccess: "Note copiée dans le presse-papier !",
    savedSuccess: "Note enregistrée avec succès !",
    deletedSuccess: "Note supprimée avec succès !",
    restoredSuccess: "Notes restaurées avec succès !",
    invalidBackupFile: "Fichier de sauvegarde non valide.",
    chars: "caractères",
    words: "mots",
    storedCount: "notes stockées localement",
    emptyCategory: "Aucune note dans cette catégorie",
    langName: "Français"
  },
  de: {
    appName: "OfflineNote",
    newNote: "Neue Notiz",
    views: "Ansichten",
    allNotes: "Alle Notizen",
    starredNotes: "Favoriten",
    categories: "Kategorien",
    actions: "Aktionen",
    exportBackup: "Sichern (JSON)",
    importBackup: "Wiederherstellen",
    mainWebsite: "Hamzas Portfolio",
    privacyBadge: "100% Offline & Privat",
    searchPlaceholder: "Notizen durchsuchen...",
    allNotesTitle: "Alle Notizen",
    allNotesSubtitle: "Privat, sicher und lokal in Ihrem Browser gespeichert.",
    starredNotesTitle: "Favorisierte Notizen",
    starredNotesSubtitle: "Ihre markierten Lieblingsgedanken und Aufgaben.",
    noNotesTitle: "Keine Notizen gefunden",
    noNotesDesc: "Erstellen Sie jetzt Ihre erste Offline-Notiz.",
    createFirstNote: "Notiz erstellen",
    noteTitlePlaceholder: "Titel der Notiz...",
    category: "Kategorie",
    color: "Farbe",
    noteContentPlaceholder: "Schreiben Sie Ihre Notiz hier...",
    cancel: "Abbrechen",
    saveNote: "Speichern",
    edit: "Bearbeiten",
    copy: "Inhalt kopieren",
    downloadTxt: "Als .txt herunterladen",
    delete: "Löschen",
    confirmDelete: "Sind Sie sicher, dass Sie diese Notiz löschen möchten?",
    copiedSuccess: "Notiz in die Zwischenablage kopiert!",
    savedSuccess: "Notiz erfolgreich gespeichert!",
    deletedSuccess: "Notiz erfolgreich gelöscht!",
    restoredSuccess: "Notizen erfolgreich wiederhergestellt!",
    invalidBackupFile: "Ungültiges Sicherungsdateiformat.",
    chars: "Zeichen",
    words: "Wörter",
    storedCount: "Notizen lokal gespeichert",
    emptyCategory: "Keine Notizen in dieser Kategorie",
    langName: "Deutsch"
  },
  ru: {
    appName: "OfflineNote",
    newNote: "Новая заметка",
    views: "Разделы",
    allNotes: "Все заметки",
    starredNotes: "Избранные",
    categories: "Категории",
    actions: "Действия",
    exportBackup: "Резервная копия (JSON)",
    importBackup: "Восстановить",
    mainWebsite: "Портфолио Hamza",
    privacyBadge: "100% Офлайн и Приватно",
    searchPlaceholder: "Поиск заметок...",
    allNotesTitle: "Все заметки",
    allNotesSubtitle: "Приватно, безопасно и хранится прямо в браузере без интернета.",
    starredNotesTitle: "Избранные заметки",
    starredNotesSubtitle: "Ваши важные мысли и задачи.",
    noNotesTitle: "Заметок пока нет",
    noNotesDesc: "Создайте свою первую офлайн-заметку прямо сейчас.",
    createFirstNote: "Создать заметку",
    noteTitlePlaceholder: "Заголовок заметки...",
    category: "Категория",
    color: "Цвет",
    noteContentPlaceholder: "Начните вводить заметку здесь...",
    cancel: "Отмена",
    saveNote: "Сохранить",
    edit: "Редактировать",
    copy: "Копировать",
    downloadTxt: "Скачать как .txt",
    delete: "Удалить",
    confirmDelete: "Вы уверены, что хотите удалить эту заметку?",
    copiedSuccess: "Заметка скопирована в буфер обмена!",
    savedSuccess: "Заметка успешно сохранена!",
    deletedSuccess: "Заметка удалена!",
    restoredSuccess: "Заметки успешно восстановлены!",
    invalidBackupFile: "Неверный формат файла.",
    chars: "символов",
    words: "слов",
    storedCount: "заметок сохранено локально",
    emptyCategory: "В этой категории нет заметок",
    langName: "Русский"
  },
  ja: {
    appName: "オフラインノート",
    newNote: "新しいノート",
    views: "表示",
    allNotes: "すべてのノート",
    starredNotes: "スター付き",
    categories: "カテゴリー",
    actions: "アクション",
    exportBackup: "バックアップ (JSON)",
    importBackup: "ノートを復元",
    mainWebsite: "ハムザのポートフォリオ",
    privacyBadge: "100% オフライン＆安全",
    searchPlaceholder: "ノートを検索...",
    allNotesTitle: "すべてのノート",
    allNotesSubtitle: "インターネット不要でブラウザに安全に保存されます。",
    starredNotesTitle: "スター付きノート",
    starredNotesSubtitle: "お気に入りのアイデアやタスク。",
    noNotesTitle: "ノートが見つかりません",
    noNotesDesc: "最初のオフラインノートを作成しましょう。すべてデバイス内に保存されます。",
    createFirstNote: "ノートを作成",
    noteTitlePlaceholder: "ノートのタイトル...",
    category: "カテゴリー",
    color: "色",
    noteContentPlaceholder: "ここにメモを入力...",
    cancel: "キャンセル",
    saveNote: "保存",
    edit: "編集",
    copy: "内容をコピー",
    downloadTxt: ".txt として保存",
    delete: "削除",
    confirmDelete: "このノートを削除してもよろしいですか？",
    copiedSuccess: "クリップボードにコピーしました！",
    savedSuccess: "ノートを保存しました！",
    deletedSuccess: "ノートを削除しました！",
    restoredSuccess: "ノートを復元しました！",
    invalidBackupFile: "無効なバックアップファイルです。",
    chars: "文字",
    words: "単語",
    storedCount: "件のノートがローカル保存されています",
    emptyCategory: "このカテゴリーにはノートがありません",
    langName: "日本語"
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

  promptAddCategory() {
    const name = prompt(this.t("addCategoryPrompt"));
    if (!name) return;
    const trimmed = name.trim();
    if (!trimmed) {
      alert(this.t("categoryNameEmpty"));
      return;
    }
    if (this.categories.some(c => c.toLowerCase() === trimmed.toLowerCase())) {
      alert(this.t("categoryExists"));
      return;
    }
    this.categories.push(trimmed);
    this.saveCategories();
    this.renderCategoriesNav();
    this.updateModalCategories();
    this.showToast(`Folder "${trimmed}" added!`);
  }

  renameCategory(oldName) {
    const newName = prompt(this.t("editCategoryPrompt"), oldName);
    if (!newName) return;
    const trimmed = newName.trim();
    if (!trimmed || trimmed === oldName) return;
    if (this.categories.some(c => c.toLowerCase() === trimmed.toLowerCase() && c.toLowerCase() !== oldName.toLowerCase())) {
      alert(this.t("categoryExists"));
      return;
    }

    const index = this.categories.indexOf(oldName);
    if (index !== -1) {
      this.categories[index] = trimmed;
      // Update all notes with this category
      this.notes.forEach(n => {
        if (n.category === oldName) n.category = trimmed;
      });
      if (this.currentFilter === oldName) {
        this.currentFilter = trimmed;
      }
      this.saveCategories();
      this.saveNotes();
      this.render();
      this.updateModalCategories();
      this.showToast(`Folder renamed to "${trimmed}"`);
    }
  }

  deleteCategory(catName) {
    const confirmMsg = this.t("confirmDeleteCategory").replace("{cat}", catName);
    if (!confirm(confirmMsg)) return;

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

    card.innerHTML = `
      <div class="note-card-header">
        <div class="note-title-wrap">
          <h3 class="note-card-title">${this.escapeHtml(note.title || "Untitled")}</h3>
          ${note.category ? `<span class="note-badge">${note.category}</span>` : ""}
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
        <p class="note-card-text">${this.escapeHtml(note.content || "")}</p>
      </div>
      <div class="note-card-footer">
        <span>${dateString}</span>
        ${note.pinned ? `<span title="Pinned"><i class="fa-solid fa-thumbtack" style="color:var(--primary);"></i></span>` : ""}
      </div>
    `;

    // Click on card opens editor
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
        this.openEditor(note.id);
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

    if (noteId) {
      const note = this.notes.find(n => n.id === noteId);
      if (!note) return;
      this.noteTitleInput.value = note.title || "";
      this.noteContentInput.value = note.content || "";
      this.noteCategorySelect.value = note.category || (this.categories[0] || "General");
      this.selectedColor = note.color || "default";
      this.isStarred = !!note.starred;
      this.isPinned = !!note.pinned;
    } else {
      this.noteTitleInput.value = "";
      this.noteContentInput.value = "";
      this.noteCategorySelect.value = this.currentFilter !== "all" && this.currentFilter !== "starred" ? this.currentFilter : (this.categories[0] || "General");
      this.selectedColor = "default";
      this.isStarred = false;
      this.isPinned = false;
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
          alert(this.t("invalidBackupFile"));
        }
      } catch (err) {
        alert(this.t("invalidBackupFile"));
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

