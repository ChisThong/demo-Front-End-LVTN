/* seller_orders.js - Logic xử lý trang Đơn hàng */

document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    const ordersData = [
        {
            id: "#NB-1024",
            date: "23/05/2026 09:15",
            products: [
                { name: "Kẹo Dừa Bến Tre", variant: "Phân loại: Ít ngọt x 5" }
            ],
            customer: "Nguyễn Văn A",
            phone: "0901234567",
            address: "123 Đại lộ Đồng Khởi, TP Bến Tre",
            total: "225.000đ",
            status: "pending",
            statusLabel: "Chờ xác nhận",
            actionLabel: "Duyệt đơn"
        },
        {
            id: "#NB-1023",
            date: "22/05/2026 14:30",
            products: [
                { name: "Nem Lai Vung", variant: "Số lượng: 2" },
                { name: "Bánh Tráng Phơi Sương", variant: "Số lượng: 1" }
            ],
            customer: "Trần Thị B",
            phone: "0987654321",
            address: "45 Lê Lợi, Phường Bến Nghé, Quận 1, TP HCM",
            total: "165.000đ",
            status: "packing",
            statusLabel: "Đang đóng gói",
            actionLabel: "Chuẩn bị hàng"
        },
        {
            id: "#NB-1022",
            date: "21/05/2026 10:00",
            products: [
                { name: "Bánh Phồng Sơn Đốc", variant: "Số lượng: 3" }
            ],
            customer: "Lê Văn C",
            phone: "0912345678",
            address: "88 Trần Hưng Đạo, Ninh Kiều, Cần Thơ",
            total: "120.000đ",
            status: "shipping",
            statusLabel: "Đang giao",
            actionLabel: "Theo dõi"
        }
    ];

    const ordersList = document.getElementById("ordersList");
    const tabs = document.querySelectorAll(".seller-tab");
    const searchInput = document.getElementById("searchInput");

    function renderOrders(filterStatus = "all", searchQuery = "") {
        ordersList.innerHTML = "";
        
        let filteredOrders = ordersData.filter(order => {
            const matchStatus = filterStatus === "all" || order.status === filterStatus;
            const matchSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                order.customer.toLowerCase().includes(searchQuery.toLowerCase());
            return matchStatus && matchSearch;
        });

        if(filteredOrders.length === 0) {
            ordersList.innerHTML = `<div style="padding: 3rem; text-align: center; color: var(--seller-muted);">Không tìm thấy đơn hàng nào.</div>`;
            return;
        }

        filteredOrders.forEach(order => {
            let productsHTML = order.products.map(p => `
                <div style="margin-bottom: 12px;">
                    <div style="font-weight: 700; font-size: 0.95rem; color: var(--seller-text);">${p.name}</div>
                    <div style="font-size: 0.85rem; color: var(--seller-muted);">${p.variant}</div>
                </div>
            `).join('');

            const badgeClass = `badge-${order.status}`;
            
            const rowHTML = `
                <div class="table-row">
                    <div>
                        <div style="font-weight: 800; font-size: 1.1rem;">${order.id}</div>
                        <div style="font-size: 0.85rem; color: var(--seller-muted); margin-top: 4px;">${order.date}</div>
                    </div>
                    <div>${productsHTML}</div>
                    <div>
                        <div style="font-weight: 700; font-size: 0.95rem;">${order.customer}</div>
                        <div style="font-size: 0.85rem; color: var(--seller-muted); margin-top: 4px; display: flex; align-items: center; gap: 4px;">
                            <i data-lucide="phone" size="14"></i> ${order.phone}
                        </div>
                        <div style="font-size: 0.85rem; color: var(--seller-muted); margin-top: 4px; display: flex; align-items: flex-start; gap: 4px;">
                            <i data-lucide="map-pin" size="14" style="margin-top: 2px; flex-shrink: 0;"></i> <span>${order.address}</span>
                        </div>
                    </div>
                    <div style="font-weight: 800; font-size: 1.1rem;">${order.total}</div>
                    <div><span class="badge-new ${badgeClass}">${order.statusLabel}</span></div>
                    <div style="text-align: right;">
                        <button class="btn-action" onclick="alert('Đã nhấn: ${order.actionLabel} cho ${order.id}')">${order.actionLabel}</button>
                    </div>
                </div>
            `;
            ordersList.insertAdjacentHTML('beforeend', rowHTML);
        });
        
        lucide.createIcons();
    }

    // Initial render
    renderOrders();

    // Tab logic
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const status = tab.getAttribute("data-status");
            renderOrders(status, searchInput.value);
        });
    });

    // Search logic
    searchInput.addEventListener("input", (e) => {
        const activeTab = document.querySelector(".seller-tab.active").getAttribute("data-status");
        renderOrders(activeTab, e.target.value);
    });
});
