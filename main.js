//  Tính tiền lương nhân viên 
/**
 * - Đầu vào: 
 
 * + biến b là số ngày
 * - Xử Lý:
 *  100000 * b = số tiền lương 
 * - Đầu ra:
 * + Xuất ra số tiền của số ngày đã làm 
 */
document.getElementById('tienLuong').onclick = function(){
var b = Number(document.getElementById('b').value);
var salary = 100000 * b;
document.getElementById('ketQua1').innerHTML = salary;
}

// Tính giá trị trung bình 
/**
 * - Đầu vào:
 *  + tạo 5 biến và gán cho 5 số thực ngẫu nhiên
 *  - Xử Lý:
 *  + lấy 5 số thực của 5 biến cộng lại rồi chia cho 5
 *  - Đầu ra:
 *  + Xuất ra giá trị trung bình của 5 số
 */
 document.getElementById('gtTB').onclick = function(){
 var c1 = Number(document.getElementById('c1').value);
 var c2 = Number(document.getElementById('c2').value);
 var c3 = Number(document.getElementById('c3').value);
 var c4 = Number(document.getElementById('c4').value);
 var c5 = Number(document.getElementById('c5').value);
 var averageValue = (c1 + c2 + c3 + c4 + c5 )/5;
 document.getElementById('ketQua2').innerHTML = averageValue ;
 }
 // Quy đổi tiền
 /**
 * - Đầu vào:
 * + Tạo biến USD = 23.500
 * + Tạo biến x là số lượng tiền đô
 *  - Xử Lý:
 *  + lấy biến x * USD = số tiền sau khi chuyển đổi
 *  - Đầu ra:
 *  + Xuất ra số tiền sau khi chuyển đổi
 *  
 */
  document.getElementById('tien$').onclick = function(){
 var x = Number(document.getElementById('x').value);
 var change = x * 23500;
 document.getElementById('ketQua3').innerHTML = change;
  }
 // Tính diện tích, chu vi hinh chữ nhật
 /**
 *  - Đầu vào:
 *  + tạo biến i là chiều rộng
 *  + tạo biến j là chiều dài
 *  - Xử Lý:
 *  + Chu vi = (dài + rộng) *2
 *  + Diện tích = dài * rộng
 *  - Đầu ra:
 *  + Xuất ra chu vi và diện tích của HCN
 */
  document.getElementById('hcn').onclick = function(){
 var i = Number(document.getElementById('i').value);
 var j = Number(document.getElementById('j').value);
 var perimeter = (2*(i + j));
 var area = i * j;
 document.getElementById('ketQua4').innerHTML = 'Chu vi: '+perimeter + 'Diện Tích' + area;
  }
 // tính tổng 2 ký số
 /**
 *  - Đầu vào:
 *  + t là số ngẫu nhiên có 2 chữ số
 *  - Xử Lý:
 *  + tạo biến t1 rồi chia lấy dư để lấy số hàng đv
 *  + tạo biến t2 rồi chia cho 10 đế lấy số hàng chục
 *  + biến toal = t1 + t2
 *  - Đầu ra:
 *  + Xuất ra giá trị total cần tính
 */
  document.getElementById('kySo').onclick = function(){
 var t = Number(document.getElementById('t').value);
 var t1 = Math.floor(t % 10);
 var t2 = Math.floor(t / 10);
 var totalT = t1 + t2;
 document.getElementById('ketQua5').innerHTML = 'Total: ' + totalT;
  }