function navbar() {
    let navbarLists = document.querySelectorAll(".navbar-list li");
    let sections = document.querySelectorAll("#sections > div");
    let groupsProject = document.querySelector(".groups-project");

    // 1. إعداد الحالة الافتراضية عند تشغيل الوظيفة
    sections.forEach((section) => {
        if (section.classList.contains("informations")) {
            section.style.display = "flex"; // إظهار قسم المعلومات
        } else {
            section.style.display = "none";  // إخفاء أي قسم آخر
        }
    });

    navbarLists.forEach((ele) => {
        ele.addEventListener("click", () => {
            const targetId = ele.getAttribute("data-id");

            // 2. تحديث التنسيق النشط (Active Class) للروابط
            navbarLists.forEach(li => li.classList.remove("active"));
            ele.classList.add("active");

            // 3. إظهار القسم المطلوب وإخفاء البقية
            sections.forEach((section) => {
                if (section.getAttribute("data-id") === targetId) {
                    section.style.cssText = `
                        flex-direction: column;
                        display: flex;
                    `;

                    if (section.getAttribute("data-id") === "details") {
                        groupsProject.style.display = "flex"
                    } else {
                        groupsProject.style.display = "none"
                    }
                } else {
                    section.style.display = "none";
                }
            });
        });
    });
}

export { navbar }