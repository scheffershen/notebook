CUDA Simply Explained - GPU vs CPU Parallel Computing for Beginners
===================================================================

https://www.youtube.com/watch?v=r9IqwpMR9TE

## examples

	$ nvidia-smi --list-gpus
		Nvida GeForce RTX 3090 (intel i9-12900k + DDR5)

	$ conda create -n ml python=3.9
	$ conda.exe init powershell
	$ conda activate ml

	$ conda install -c anaconda cudatoolkit
	or 
	$ conda install -c pytorch pytorch (this is better)
	$ conda install -c anaconda jupyter
	$ jupyter notebook

```python
import torch

if torch.cuda.is_available():
	device = torch.device("cuda")
else:
	device = torch.device("cpu")

print("using", device, "device")

import time

matrix_size = 32*512

x = torch.randn(matrix_size, matrix_size)
y = torch.randn(matrix_size, matrix_size)

print("************** CPU SPEED ********************")
start = time.time()
result = torch.matmul(x,y)
print(time.time() - start)
print("verify device:", result.device)

x_gpu = x.to(device)
y_gpu = y.to(device)
torch.cuda.synchronize()

for i in rang(3):
	print("************** GPU SPEED ********************")
	start = time.time()
	result_gpu = torch.matmul(x_gpu,y_gpu)
	torch.cuda.synchronize()
	print(time.time() - start)
	print("verify device:", result_gpu.device)
```