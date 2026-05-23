/* seller_reviews.js - Logic xử lý trang Đánh giá */

document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    let reviewsData = [
        {
            id: 1,
            customerName: "Minh Tran",
            customerAvatar: "https://ui-avatars.com/api/?name=Minh+Tran&background=random",
            date: "22/05/2026 15:30",
            rating: 5,
            content: "Kẹo ăn rất ngon, vị dừa thơm béo mà không bị ngọt gắt. Gói hàng cẩn thận, giao hàng siêu nhanh. Mình sẽ ủng hộ shop tiếp vào dịp Tết!",
            hasImage: false,
            productName: "Kẹo Dừa Bến Tre",
            productVariant: "Phân loại: Ít ngọt",
            productImg: "img/keodua.png",
            reply: "Dạ NamBộ Specialties cảm ơn bạn đã tin tưởng và ủng hộ sản phẩm Kẹo dừa Bến Tre ạ. Rất mong được phục vụ bạn trong những đơn hàng tiếp theo nha!"
        },
        {
            id: 2,
            customerName: "Huyen Nguyen",
            customerAvatar: "https://ui-avatars.com/api/?name=Huyen+Nguyen&background=random",
            date: "20/05/2026 09:12",
            rating: 4,
            content: "Nem ngon, chua vừa tới. Tuy nhiên ship hơi lâu một chút nên mình trừ 1 sao. Mong shop cải thiện tốc độ giao hàng.",
            hasImage: true,
            productName: "Nem Lai Vung",
            productVariant: "Số lượng: 2",
            productImg: "img/image copy 4.png",
            reply: null
        }
    ];

    const reviewsList = document.getElementById("reviewsList");
    const tabs = document.querySelectorAll("#reviewTabs .seller-tab");
    const searchInput = document.getElementById("reviewSearch");
    
    // Modal elements
    const replyModal = document.getElementById("replyModal");
    const cancelReplyBtn = document.getElementById("cancelReplyBtn");
    const submitReplyBtn = document.getElementById("submitReplyBtn");
    const replyTextarea = document.getElementById("replyTextarea");
    let currentReviewId = null;

    function renderReviews(filterType = "all", searchQuery = "") {
        reviewsList.innerHTML = "";
        
        let filteredReviews = reviewsData.filter(rev => {
            let matchFilter = true;
            if(filterType === "5") matchFilter = rev.rating === 5;
            if(filterType === "hasImage") matchFilter = rev.hasImage === true;
            if(filterType === "unreplied") matchFilter = rev.reply === null;
            
            let matchSearch = rev.content.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              rev.customerName.toLowerCase().includes(searchQuery.toLowerCase());
            return matchFilter && matchSearch;
        });

        if(filteredReviews.length === 0) {
            reviewsList.innerHTML = `<div style="padding: 3rem; text-align: center; color: var(--seller-muted);">Không tìm thấy đánh giá nào.</div>`;
            return;
        }

        filteredReviews.forEach(rev => {
            let starsHTML = "";
            for(let i=1; i<=5; i++) {
                if(i <= rev.rating) {
                    starsHTML += `<i data-lucide="star" fill="#FFB300" color="#FFB300" size="16"></i>`;
                } else {
                    starsHTML += `<i data-lucide="star" fill="#eee" color="#eee" size="16"></i>`;
                }
            }

            let replyHTML = "";
            if(rev.reply) {
                replyHTML = `
                    <div class="seller-reply-box">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <div style="font-weight: 700; color: var(--seller-sidebar);">Phản hồi của Người bán</div>
                        </div>
                        <p style="color: var(--seller-text); font-size: 0.95rem; line-height: 1.5; margin:0;">${rev.reply}</p>
                    </div>
                `;
            } else {
                replyHTML = `
                    <div style="margin-top: 1rem;">
                        <button class="btn-action open-reply-btn" data-id="${rev.id}">
                            <i data-lucide="message-circle" size="16" style="vertical-align: middle; margin-right: 5px;"></i> Phản hồi
                        </button>
                    </div>
                `;
            }

            const rowHTML = `
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer">
                            <img src="${rev.customerAvatar}" alt="Avatar">
                            <div>
                                <div style="font-weight: 700; font-size: 1.1rem;">${rev.customerName}</div>
                                <div style="display: flex; gap: 2px; margin-top: 4px;">${starsHTML}</div>
                            </div>
                        </div>
                        <div style="color: var(--seller-muted); font-size: 0.9rem; font-weight: 600;">${rev.date}</div>
                    </div>
                    
                    <div class="product-ref">
                        <img src="${rev.productImg}">
                        <div>
                            <div style="font-weight: 700; font-size: 0.95rem;">${rev.productName}</div>
                            <div style="font-size: 0.8rem; color: var(--seller-muted);">${rev.productVariant}</div>
                        </div>
                    </div>
                    
                    <p style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 1rem;">${rev.content}</p>
                    
                    ${replyHTML}
                </div>
            `;
            reviewsList.insertAdjacentHTML('beforeend', rowHTML);
        });
        
        lucide.createIcons();

        // Bind reply buttons
        document.querySelectorAll(".open-reply-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                currentReviewId = parseInt(e.currentTarget.getAttribute("data-id"));
                replyTextarea.value = "";
                replyModal.style.display = "flex";
            });
        });
    }

    // Initial render
    renderReviews();

    // Tab logic
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const filter = tab.getAttribute("data-filter");
            renderReviews(filter, searchInput.value);
        });
    });

    // Search logic
    searchInput.addEventListener("input", (e) => {
        const activeTab = document.querySelector("#reviewTabs .seller-tab.active").getAttribute("data-filter");
        renderReviews(activeTab, e.target.value);
    });

    // Modal logic
    cancelReplyBtn.addEventListener("click", () => {
        replyModal.style.display = "none";
    });

    submitReplyBtn.addEventListener("click", () => {
        const text = replyTextarea.value.trim();
        if(text && currentReviewId) {
            const revIndex = reviewsData.findIndex(r => r.id === currentReviewId);
            if(revIndex > -1) {
                reviewsData[revIndex].reply = text;
                const activeTab = document.querySelector("#reviewTabs .seller-tab.active").getAttribute("data-filter");
                renderReviews(activeTab, searchInput.value);
                replyModal.style.display = "none";
            }
        }
    });
});
